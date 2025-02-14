import { useNavigate } from 'react-router-dom';

function GravityFieldButton() {
    const navigate = useNavigate();

    return (
        <button
            className="text-gray-400 bg-black text-md hover:text-gray-300 transition"
            onClick={() => navigate('/gravity-field')}
        >
            Gravity Field
        </button>
    );
}

export default GravityFieldButton;
