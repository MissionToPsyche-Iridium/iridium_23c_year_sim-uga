import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PsycheLogo from '../../assets/images/psyche-logo.png';
import YearOnPsyche from '../../assets/images/year-on-psyche-topbar.png';
import MissionOverviewButton from '../buttons/MissionOverviewButton';
import ShapeRotationButton from '../buttons/ShapeRotationButton';
import OrbitYearButton from '../buttons/OrbitYearButton';
import SCCButton from '../buttons/SCCButton';
import ImpactButton from '../buttons/ImpactButton';
import LearnMoreButton from '../buttons/LearnMoreButton';
import ChatbotButton from '../buttons/ChatbotButton';

function Topbar() {
    const navigate = useNavigate();

    return (
        <div className="bg-black flex items-center justify-between px-4 py-2">
            <div className="flex items-center space-x-4">
                {/* Logo Group */}
                <div
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => navigate('/mission-overview')}
                >
                    <img
                        src={PsycheLogo}
                        className="h-8 flex-shrink-0"
                        alt="Psyche Logo"
                    />
                    <img
                        src={YearOnPsyche}
                        className="h-4 flex-shrink-0"
                        alt="Year on Psyche"
                    />
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center ml-20">
                    <MissionOverviewButton />
                    <div className="h-6 border-r border-gray-700 mx-3"></div>
                    <ShapeRotationButton />
                    <div className="h-6 border-r border-gray-700 mx-3"></div>
                    <OrbitYearButton />
                    <div className="h-6 border-r border-gray-700 mx-3"></div>
                    <SCCButton />
                    <div className="h-6 border-r border-gray-700 mx-3"></div>
                    <ImpactButton />
                    <div className="h-6 border-r border-gray-700 mx-3"></div>
                    <ChatbotButton />
                    <div className="h-6 border-r border-gray-700 mx-3"></div>
                    <LearnMoreButton />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
