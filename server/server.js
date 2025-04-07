import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import { MongoClient } from "mongodb";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence, RunnablePassthrough } from "@langchain/core/runnables";
import { formatDocumentsAsString } from "langchain/util/document";

dotenv.config();

const openAIApiKey = process.env.OPENAI_API_KEY;
const atlasUri = process.env.MONGODB_ATLAS_URI;
const dbName = process.env.MONGODB_DB_NAME;
const collectionName = process.env.MONGODB_COLLECTION_NAME;
const indexName = process.env.MONGODB_INDEX_NAME;
const embeddingModel = "text-embedding-3-small";
const llmModel = "gpt-3.5-turbo";
const port = process.env.PORT || 3001; 
const numberOfDocsToRetrieve = 4; 

if (!openAIApiKey || !atlasUri || !dbName || !collectionName || !indexName) {
    console.error("FATAL ERROR: Missing required environment variables (OpenAI Key, MongoDB Atlas details).");
    process.exit(1); 
}

let vectorStore;
let mongoClient; 

async function initializeVectorStore() {
    console.log("Initializing MongoDB client...");
    mongoClient = new MongoClient(atlasUri);

    try {
        console.log("MongoDB client initialized.");

        const collection = mongoClient.db(dbName).collection(collectionName);

        console.log("Initializing MongoDB Atlas Vector Store...");
        vectorStore = new MongoDBAtlasVectorSearch(
            new OpenAIEmbeddings({ openAIApiKey, modelName: embeddingModel }), 
            {
                collection: collection,
                indexName: indexName, 
                textKey: "text",      
                embeddingKey: "embedding", 
            }
        );
        console.log("MongoDB Atlas Vector Store initialized successfully.");

    } catch (error) {
        console.error("FATAL ERROR: Failed to initialize MongoDB Atlas Vector Store:", error);
        if (mongoClient) {
            await mongoClient.close();
        }
        process.exit(1); 
    }
}

const llm = new ChatOpenAI({
    openAIApiKey: openAIApiKey,
    modelName: llmModel,
    temperature: 0.2,
});

const app = express();
app.use(cors()); 
app.use(express.json()); 


let ragChain;

async function setupRagChain() {
    if (!vectorStore) {
        console.error("Vector store not initialized. Cannot set up RAG chain.");
        return;
    }

    console.log(`Setting up retriever to fetch top ${numberOfDocsToRetrieve} documents...`);
    const retriever = vectorStore.asRetriever({
        k: numberOfDocsToRetrieve,
    });

    const promptTemplate = PromptTemplate.fromTemplate(
        `You are an AI assistant knowledgeable about NASA's 16 Psyche mission, specifically based on the research context provided.
Answer the user's question concisely and accurately using ONLY the following context.
If the context doesn't contain the answer, state clearly that the provided documents do not contain that information.
Do not add information that is not present in the context.

Context:
{context}

Question:
{question}

Answer:`
    );

    console.log("Constructing RAG chain...");
    ragChain = RunnableSequence.from([
        {
            context: retriever.pipe(formatDocumentsAsString), 
            question: new RunnablePassthrough(), 
        },
        promptTemplate, 
        llm,
        new StringOutputParser(),
    ]);
    console.log("RAG chain constructed successfully.");
}

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    if (!ragChain) {
         console.error("Error: RAG chain is not available.");
         return res.status(500).json({ error: 'Server is not ready, RAG chain failed to initialize.' });
    }

    try {
        console.log(`Received query: "${message}"`);
        console.log("Invoking RAG chain...");

        const startTime = Date.now();
        const result = await ragChain.invoke(message);
        const endTime = Date.now();

        console.log(`RAG chain finished in ${endTime - startTime}ms.`);
        console.log(`Sending response: "${result}"`);

        res.json({ answer: result });

    } catch (error) {
        console.error("Error processing RAG chain:", error);
        res.status(500).json({ error: 'Failed to process request with RAG chain.' });
    }
});

async function startServer() {
    await initializeVectorStore(); 
    await setupRagChain();        

    if (ragChain) {
        app.listen(port, () => {
            console.log(`Backend server listening on port ${port}`);
            console.log(`Ready to accept requests at http://localhost:${port}/api/chat`);
        });
    } else {
         console.error("Server failed to start because RAG chain initialization failed.");
         if (mongoClient) {
             await mongoClient.close();
         }
         process.exit(1);
    }
}

startServer();

process.on('SIGINT', async () => {
  console.log('SIGINT signal received: closing MongoDB connection...');
  if (mongoClient) {
    await mongoClient.close();
    console.log('MongoDB connection closed.');
  }
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received: closing MongoDB connection...');
  if (mongoClient) {
    await mongoClient.close();
    console.log('MongoDB connection closed.');
  }
  process.exit(0);
});