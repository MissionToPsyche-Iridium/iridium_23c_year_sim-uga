import { useNavigate } from 'react-router-dom';
import surfaceIcon from '../../assets/icons/surface-comp.png';

function SurfaceCompositionButton() {
    const navigate = useNavigate();

    return (
        <button
            className="flex items-center text-white text-md hover:text-gray-300 transition"
            onClick={() => navigate('/surface-composition')}
        >
            Surface Composition
            <img
                src={surfaceIcon}
                alt="Surface Composition Icon"
                className="h-4 w-4 ml-2 invert"
            />
        </button>
    );
}

export default SurfaceCompositionButton;
