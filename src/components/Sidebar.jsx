import MissionOverviewButton from './buttons/MissionOverviewButton';
import TimelineButton from './buttons/TimelineButton';
import SurfaceCompButton from './buttons/SurfaceCompositionButton';
import SeasonalTempButton from './buttons/SeasonalTempButton';
import GravityFieldButton from './buttons/GravityFieldButton';
import CraterExplorerButton from './buttons/CraterExplorerButton';
import ChatbotButton from './buttons/ChatbotButton';
import closeIcon from '../assets/icons/close.png';

function Sidebar({ isOpen, onClose }) {
    return (
        <div
            className={`fixed top-0 right-0 z-50 h-full w-64 bg-gray-800 text-white transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <button onClick={onClose}>
                <img src={closeIcon} className="h-7 p-2 invert"></img>
            </button>
            <hr className="border-t border-white w-full" />
            <div className="space-y-6">
                <div className="m-4">
                    <MissionOverviewButton />
                    <p className="text-sm text-gray-400">
                        Overview of the mission
                    </p>
                </div>
                <hr className="border-t border-white w-full" />
                <div className="m-4">
                    <TimelineButton />
                    <p className="text-sm text-gray-400">Mission timeline</p>
                </div>
                <hr className="border-t border-white w-full" />
                <div className="m-4">
                    <SurfaceCompButton />
                    <p className="text-sm text-gray-400">
                        Surface composition details
                    </p>
                </div>
                <hr className="border-t border-white w-full" />
                <div className="m-4">
                    <SeasonalTempButton />
                    <p className="text-sm text-gray-400">
                        Seasonal temperature variations
                    </p>
                </div>
                <hr className="border-t border-white w-full" />
                <div className="m-4">
                    <GravityFieldButton />
                    <p className="text-sm text-gray-400">
                        Gravity field information
                    </p>
                </div>
                <hr className="border-t border-white w-full" />
                <div className="m-4">
                    <CraterExplorerButton />
                    <p className="text-sm text-gray-400">Explore craters</p>
                </div>
                <hr className="border-t border-white w-full" />
                <div className="m-4">
                    <ChatbotButton />
                    <p className="text-sm text-gray-400">Chat with our bot</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
