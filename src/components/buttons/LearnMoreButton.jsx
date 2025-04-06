import { useNavigate } from 'react-router-dom';

function LearnMoreButton() {
    const navigate = useNavigate();

    return (
        <button
            className="text-gray-400 font-mono bg-black text-sm hover:text-gray-300 transition"
            onClick={() => navigate('/learn-more')}
        >
            Learn More
        </button>
    );
}

export default LearnMoreButton;
