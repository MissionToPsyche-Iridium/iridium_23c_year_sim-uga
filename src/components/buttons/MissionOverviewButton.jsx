import { useNavigate } from 'react-router-dom';
import missionOverviewIcon from '../../assets/icons/asteroid.png';

function MissionOverviewButton() {
    const navigate = useNavigate();

    return (
        <button
            className="flex items-center text-white text-md hover:text-gray-300 transition"
            onClick={() => navigate('/mission-overview')}
        >
            Mission Overview
            <img
                src={missionOverviewIcon}
                alt="Mission Overview Icon"
                className="h-4 w-4 ml-2 invert"
            />
        </button>
    );
}

export default MissionOverviewButton;
