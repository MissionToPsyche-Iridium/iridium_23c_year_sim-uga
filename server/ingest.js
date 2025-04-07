import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const papersPath = "./papers";
const embeddingModel = "text-embedding-3-small";
const chunkSize = 1000;
const chunkOverlap = 150;

const atlasUri = process.env.MONGODB_ATLAS_URI;
const dbName = process.env.MONGODB_DB_NAME;
const collectionName = process.env.MONGODB_COLLECTION_NAME;
const indexName = process.env.MONGODB_INDEX_NAME; 

if (!atlasUri || !dbName || !collectionName || !indexName) {
    throw new Error(
        "MongoDB connection details (URI, DB_NAME, COLLECTION_NAME, INDEX_NAME) must be set in .env"
    );
}
const client = new MongoClient(atlasUri);

async function runIngestion() {
    try {
        console.log(`Loading documents from ${papersPath}...`);
        const loader = new DirectoryLoader(papersPath, {
            ".pdf": (path) => new PDFLoader(path),
        });
        const docs = await loader.load();
        if (docs.length === 0) {
            console.error("Error: No documents found in the specified directory.");
            await client.close(); 
            return;
        }
        console.log(`Loaded ${docs.length} documents.`);

        docs.forEach(doc => {
            const parts = doc.metadata.source.split(/[\\/]/);
            doc.metadata.filename = parts[parts.length - 1];
        });

        console.log(`Splitting documents into chunks (size: ${chunkSize}, overlap: ${chunkOverlap})...`);
        const textSplitter = new RecursiveCharacterTextSplitter({
            chunkSize: chunkSize,
            chunkOverlap: chunkOverlap,
            keepSeparator: true, 
        });
        const splitDocs = await textSplitter.splitDocuments(docs);
        console.log(`Split into ${splitDocs.length} chunks.`);

        console.log(`Initializing embedding model: ${embeddingModel}...`);
        const embeddings = new OpenAIEmbeddings({
            openAIApiKey: process.env.OPENAI_API_KEY,
            modelName: embeddingModel,
        });

        console.log(`Connecting to MongoDB Atlas: ${dbName}.${collectionName}...`);
        const collection = client.db(dbName).collection(collectionName);

        console.log(`Ingesting documents into MongoDB Atlas collection '${collectionName}'...`);
        console.log(`Using Vector Search index: '${indexName}'`);

        const docCount = await collection.countDocuments();
        if (docCount > 0) {
            console.log(`Collection already contains ${docCount} documents. Deleting existing documents...`);
            await collection.deleteMany({}); 
            console.log("Existing documents deleted.");
        }

        await MongoDBAtlasVectorSearch.fromDocuments(
            splitDocs, 
            embeddings,
            {
                collection: collection,
                indexName: indexName, 
                textKey: "text", 
                embeddingKey: "embedding", 
            }
        );

        console.log("Ingestion complete!");
        console.log(`${splitDocs.length} chunks ingested into MongoDB Atlas.`);

    } catch (error) {
        console.error("Error during ingestion:", error);
        if (process.env.OPENAI_API_KEY && error.message.includes('API key')) {
            console.error("Hint: Double-check your OPENAI_API_KEY.")
        }
        if (error.message.includes('index') || error.message.includes('vectorSearch')) {
            console.error(`Hint: Ensure the Vector Search index named '${indexName}' is correctly created and built on the '${collectionName}' collection in MongoDB Atlas, and that it uses the correct number of dimensions (${embeddingModel === 'text-embedding-3-small' ? 1536 : 'CHECK_MODEL_DOCS'}). Also check network access/IP whitelisting in Atlas.`);
        }
         if (error.message.includes('MongoClient')) {
            console.error(`Hint: Check your MongoDB Atlas connection string (MONGODB_ATLAS_URI) and ensure your current IP address is whitelisted in Atlas network settings.`);
         }

    } finally {
        await client.close();
        console.log("MongoDB connection closed.");
    }
}

runIngestion();