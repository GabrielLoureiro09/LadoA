import WebFont from 'webfontloader';
import { useEffect } from 'react';
import '../styles/Navbar.css';
import '../styles/Geral.css'
import vinil from '../img/vinil.webp';

export default function Navbar({ tamanho, texto }) {
    return (
        <div>
            <div id="navbar-limit" style={{height: tamanho}} >
                <img id="navbar-img" src={vinil} alt="Vinil" />
            </div>
            <div id="navbar-line"></div>
            <div id="navbar-text">{texto}</div>
        </div>
    );
}
