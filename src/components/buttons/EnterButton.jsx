import { useNavigate } from 'react-router-dom';

function EnterButton() {
    const navigate = useNavigate();

    return (
        <button
            className="font-mono text-gray-400 hover:text-gray-300 transition-colors bg-black px-6 py-3 rounded-lg border-2 border-gray-600 hover:border-gray-400 text-xl"
            onClick={() => navigate('/mission-overview')}
        >
            ▷ ENTER SIMULATION
        </button>
    );
}

export default EnterButton;
