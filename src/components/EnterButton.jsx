import { useNavigate } from 'react-router-dom';

function EnterButton() {
    const navigate = useNavigate();

    return (
        <button
            className="w-60 bg-black text-white rounded-full text-3xl px-3 py-3 border-4 border-gray-500 hover:bg-gray-500 transition"
            onClick={() => navigate('/home')}
        >
            Enter
        </button>
    );
}

export default EnterButton;
