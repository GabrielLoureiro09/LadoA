import WebFont from 'webfontloader';
import { useEffect } from 'react';
import './Navbar.css';

import vinil from '../../public/img/vinil.webp';

export default function Navbar(tamanho, texto) {
    return (
        <div>
            <div id="navbar-limit-login">
                <img id="navbar-img-login" style={{ height: tamanho }} src={vinil} alt="Vinil" />
            </div>
            <div id="navbar-login"></div>
            <div id="navbar-text-login">{texto}</div>
        </div>
    );
}
