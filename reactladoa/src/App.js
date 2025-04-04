import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import MainLogin from './Main-Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/mainlogin" element={<MainLogin />} />
            </Routes>
        </Router>
    );
}

export default App;