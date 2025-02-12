import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InstructionsPage from './pages/InstructionsPage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage></LandingPage>}></Route>
                <Route
                    path="/instructions"
                    element={<InstructionsPage></InstructionsPage>}
                ></Route>
                <Route path="/home" element={<HomePage></HomePage>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
