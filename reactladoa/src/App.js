import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login.js';
import MainLogout from './Main-Logout/Main-Logout.js'
import MainLogin from './Main-Login/Main-Login.js';
import Checkout from './Checkout/Checkout.js';
import Cadastro from './Cadastro/Cadastro.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainLogout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mainlogin" element={<MainLogin />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path='/cadastro' element={<Cadastro />}/>
            </Routes>
        </Router>
    );
}

export default App;