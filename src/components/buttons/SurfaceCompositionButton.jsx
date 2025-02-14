import { useNavigate } from 'react-router-dom';

function SurfaceCompositionButton() {
    const navigate = useNavigate();

    return (
        <button
            className="text-gray-400 bg-black text-md hover:text-gray-300 transition"
            onClick={() => navigate('/surface-composition')}
        >
            Surface Composition
        </button>
    );
}

export default SurfaceCompositionButton;
