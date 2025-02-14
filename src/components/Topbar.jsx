import { useNavigate } from 'react-router-dom';
import PsycheLogo from '../assets/images/psyche-logo.png';
import YearOnPsyche from '../assets/images/year-on-psyche-topbar.png';
import MissionOverviewButton from './buttons/MissionOverviewButton';
import TimelineButton from './buttons/TimelineButton';
import SurfaceCompButton from './buttons/SurfaceCompositionButton';
import SeasonalTempButton from './buttons/SeasonalTempButton';
import GravityFieldButton from './buttons/GravityFieldButton';
import CraterExplorerButton from './buttons/CraterExplorerButton';
import ChatbotButton from './buttons/ChatbotButton';

function TopBar() {
    const navigate = useNavigate();

    return (
        <div className="bg-black flex items-center px-6 py-3">
            <div
                className="flex items-center space-x-1"
                onClick={() => navigate('/home')}
            >
                <img src={PsycheLogo} className="h-10" alt="Psyche Logo" />
                <img src={YearOnPsyche} className="h-6" alt="Year on Psyche" />
            </div>
            <div className="flex items-center space-x-6 ml-auto">
                <MissionOverviewButton></MissionOverviewButton>
                <TimelineButton></TimelineButton>
                <SurfaceCompButton></SurfaceCompButton>
                <SeasonalTempButton></SeasonalTempButton>
                <GravityFieldButton></GravityFieldButton>
                <CraterExplorerButton></CraterExplorerButton>
                <ChatbotButton></ChatbotButton>
            </div>
        </div>
    );
}

export default TopBar;
