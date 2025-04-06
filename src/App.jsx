import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InstructionsPage from './pages/InstructionsPage';
import MissionOverviewPage from './pages/MissionOverviewPage';
import ShapeRotationPage from './pages/ShapeRotationPage';
import OrbitYearPage from './pages/OrbitYearPage';
import SCCPage from './pages/SCCPage';
import ImpactPage from './pages/ImpactPage';
import LearnMorePage from './pages/LearnMorePage';
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
                <Route
                    path="/mission-overview"
                    element={<MissionOverviewPage />}
                ></Route>
                <Route
                    path="/shape-rotation"
                    element={<ShapeRotationPage />}
                ></Route>
                <Route path="/orbit-year" element={<OrbitYearPage />}></Route>
                <Route path="/scc" element={<SCCPage />}></Route>
                <Route path="/impact" element={<ImpactPage />}></Route>
                <Route path="/chatbot" element={<ChatbotPage />}>
                    {' '}
                </Route>
                <Route path="/learn-more" element={<LearnMorePage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
