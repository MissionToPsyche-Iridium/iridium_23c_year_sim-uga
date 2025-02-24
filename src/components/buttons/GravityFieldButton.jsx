import { useNavigate } from 'react-router-dom';
import gravityIcon from '../../assets/icons/gravity.png';

function GravityFieldButton() {
    const navigate = useNavigate();

    return (
        <button
            className="flex items-center text-white text-md hover:text-gray-300 transition"
            onClick={() => navigate('/gravity-field')}
        >
            Gravity Field
            <img
                src={gravityIcon}
                alt="Gravity Icon"
                className="h-4 w-4 ml-2 invert"
            />
        </button>
    );
}

export default GravityFieldButton;
