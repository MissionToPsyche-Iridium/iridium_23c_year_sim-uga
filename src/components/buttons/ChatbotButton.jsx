import { useNavigate } from 'react-router-dom';

function ChatbotButton() {
    const navigate = useNavigate();

    return (
        <button
            className="text-gray-400 bg-black text-md hover:text-gray-300 transition"
            onClick={() => navigate('/chatbot')}
        >
            Chatbot
        </button>
    );
}

export default ChatbotButton;
