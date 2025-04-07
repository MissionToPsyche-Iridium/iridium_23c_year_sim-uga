import { useNavigate } from 'react-router-dom';

function ChatbotButton() {
    const navigate = useNavigate();

    return (
        <button
            className="text-gray-400 font-mono bg-black text-sm hover:text-gray-300 transition"
            onClick={() => navigate('/chatbot')}
        >
            Chatbot
        </button>
    );
}

export default ChatbotButton;
