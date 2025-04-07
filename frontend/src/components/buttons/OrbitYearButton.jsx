import { useNavigate } from 'react-router-dom';

function OrbitYearButton() {
    const navigate = useNavigate();

    return (
        <button
            className="text-gray-400 font-mono bg-black text-sm hover:text-gray-300 transition"
            onClick={() => navigate('/orbit-year')}
        >
            Orbit and Year
        </button>
    );
}

export default OrbitYearButton;
