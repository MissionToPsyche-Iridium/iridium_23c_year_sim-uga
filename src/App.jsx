import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InstructionsPage from './pages/InstructionsPage';
import HomePage from './pages/HomePage';
import MissionOverviewPage from './pages/MissionOverviewPage';
import TimelinePage from './pages/TimelinePage';
import SurfaceCompositionPage from './pages/SurfaceCompositionPage';
import SeasonalTemperaturesPage from './pages/SeasonalTemperaturesPage';
import GravityFieldPage from './pages/GravityFieldPage';
import CraterExplorerPage from './pages/CraterExplorerPage';
import ChatbotPage from './pages/ChatbotPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route
                    path="/instructions"
                    element={<InstructionsPage />}
                ></Route>
                <Route path="/home" element={<HomePage />}></Route>
                <Route
                    path="/mission-overview"
                    element={<MissionOverviewPage />}
                ></Route>
                <Route path="/timeline" element={<TimelinePage />}></Route>
                <Route
                    path="/surface-composition"
                    element={<SurfaceCompositionPage />}
                ></Route>
                <Route
                    path="/seasonal-temperatures"
                    element={<SeasonalTemperaturesPage />}
                ></Route>
                <Route
                    path="/gravity-field"
                    element={<GravityFieldPage />}
                ></Route>
                <Route
                    path="/crater-explorer"
                    element={<CraterExplorerPage />}
                ></Route>
                <Route path="/chatbot" element={<ChatbotPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
