import { useNavigate } from 'react-router-dom';

function SCCButton() {
    const navigate = useNavigate();

    return (
        <button
            className="text-gray-400 font-mono bg-black text-md hover:text-gray-300 transition"
            onClick={() => navigate('/scc')}
        >
            Surface Charactertistics and Composition
        </button>
    );
}

export default SCCButton;
