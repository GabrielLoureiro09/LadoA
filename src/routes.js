import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.js';
import MainLogout from './pages/Main-Logout/Main-Logout.js'
import MainLogin from './pages/Main-Login/Main-Login.js';
import Checkout from './pages/Checkout/Checkout.js';
import Cadastro from './pages/Cadastro/Cadastro.js';
import Carrinho from './pages/Carrinho/Carrinho.js';



function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainLogout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mainlogin" element={<MainLogin />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path='/cadastro' element={<Cadastro />}/>
                <Route path='/carrinho' element={<Carrinho />}/>
            </Routes>
        </Router>
    );
}

export default App;