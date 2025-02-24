import { useNavigate } from 'react-router-dom';
import craterExplorerIcon from '../../assets/icons/crater.png';

function CraterExplorerButton() {
    const navigate = useNavigate();

    return (
        <button
            className="flex items-center text-white text-md hover:text-gray-300 transition"
            onClick={() => navigate('/crater-explorer')}
        >
            Crater Explorer
            <img
                src={craterExplorerIcon}
                alt="Crater Explorer Icon"
                className="h-4 w-4 ml-2 invert"
            />
        </button>
    );
}

export default CraterExplorerButton;
