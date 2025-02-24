import { useNavigate } from 'react-router-dom';
import timelineIcon from '../../assets/icons/timeline.png';

function TimelineButton() {
    const navigate = useNavigate();

    return (
        <button
            className="flex items-center text-white text-md hover:text-gray-300 transition"
            onClick={() => navigate('/timeline')}
        >
            Timeline
            <img
                src={timelineIcon}
                alt="Timeline Icon"
                className="h-4 w-4 ml-2 invert"
            />
        </button>
    );
}

export default TimelineButton;
