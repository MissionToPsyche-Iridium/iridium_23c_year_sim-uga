import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PsycheLogo from '../assets/images/psyche-logo.png';
import YearOnPsyche from '../assets/images/year-on-psyche-topbar.png';
import Sidebar from './Sidebar';
import arrowIcon from '../assets/icons/arrow-down.svg';

function Topbar() {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <>
            <div className="bg-black flex items-center px-6 py-3">
                <div
                    className="flex items-center space-x-1"
                    onClick={() => navigate('/home')}
                >
                    <img src={PsycheLogo} className="h-10" alt="Psyche Logo" />
                    <img
                        src={YearOnPsyche}
                        className="h-6"
                        alt="Year on Psyche"
                    />
                </div>
                <div className="ml-auto">
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-400 bg-black text-md flex items-center hover:text-gray-300 transition"
                    >
                        Explore
                        <img
                            src={arrowIcon}
                            alt="Arrow"
                            className="ml-2 h-4 w-4 invert"
                        />
                    </button>
                </div>
            </div>
            <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
        </>
    );
}

export default Topbar;
