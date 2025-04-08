import { useNavigate } from 'react-router-dom';

function InstructionsEnterButton() {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate('/mission-overview');
    };

    return (
        <button
            className="text-gray-400 font-mono bg-black text-sm py-2 px-4 rounded hover:text-gray-300 hover:bg-gray-800 transition duration-200 ease-in-out"
            onClick={handleEnter}
        >
            Enter Site
        </button>
    );
}

export default InstructionsEnterButton;