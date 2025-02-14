import { useNavigate } from 'react-router-dom';

function SeasonalTempButton() {
    const navigate = useNavigate();

    return (
        <button
            className="text-gray-400 bg-black text-md hover:text-gray-300 transition"
            onClick={() => navigate('/seasonal-temperatures')}
        >
            Seasonal Temperatures
        </button>
    );
}

export default SeasonalTempButton;
