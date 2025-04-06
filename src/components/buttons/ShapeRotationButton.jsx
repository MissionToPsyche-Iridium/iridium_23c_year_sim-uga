import { useNavigate } from 'react-router-dom';

function ShapeRotationButton() {
    const navigate = useNavigate();

    return (
        <button
            className="text-gray-400 font-mono bg-black text-sm hover:text-gray-300 transition"
            onClick={() => navigate('/shape-rotation')}
        >
            Shape and Rotation
        </button>
    );
}

export default ShapeRotationButton;
