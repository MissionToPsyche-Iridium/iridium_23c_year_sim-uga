import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();

    return (
        <button
            className="text-gray-400 font-mono bg-black text-sm py-2 px-4 rounded hover:text-gray-300 hover:bg-gray-800 transition duration-200 ease-in-out"
            onClick={() => navigate('/')}
        >
            Go Back
        </button>
    );
}

export default BackButton;