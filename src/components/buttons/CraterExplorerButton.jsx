import { useNavigate } from 'react-router-dom';

function CraterExplorerButton() {
    const navigate = useNavigate();

    return (
        <button
            className="text-gray-400 bg-black text-md hover:text-gray-300 transition"
            onClick={() => navigate('/crater-explorer')}
        >
            Crater Explorer
        </button>
    );
}

export default CraterExplorerButton;
