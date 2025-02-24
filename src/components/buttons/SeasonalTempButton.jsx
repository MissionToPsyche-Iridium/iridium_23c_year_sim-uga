import { useNavigate } from 'react-router-dom';
import tempIcon from '../../assets/icons/temperature.png';

function SeasonalTempButton() {
    const navigate = useNavigate();

    return (
        <button
            className="flex items-center text-white text-md hover:text-gray-300 transition"
            onClick={() => navigate('/seasonal-temperatures')}
        >
            Seasonal Temperatures
            <img
                src={tempIcon}
                alt="Temperature Icon"
                className="h-4 w-4 ml-2 invert"
            />
        </button>
    );
}

export default SeasonalTempButton;
