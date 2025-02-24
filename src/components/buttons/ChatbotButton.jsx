import { useNavigate } from 'react-router-dom';
import chatbotIcon from '../../assets/icons/chatbot.png';

function ChatbotButton() {
    const navigate = useNavigate();

    return (
        <button
            className="flex items-center text-white text-md hover:text-gray-300 transition"
            onClick={() => navigate('/chatbot')}
        >
            Chatbot
            <img
                src={chatbotIcon}
                alt="Chatbot Icon"
                className="h-4 w-4 ml-2 invert"
            />
        </button>
    );
}

export default ChatbotButton;
