import './Cadastro.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import perfil from '../img/perfil.png'
import disco from '../img/disco.png';
import carrinho from '../img/carrinho.png';
import lupa from '../img/lupa.png';

function Header(){
    return(
        <header>
        <div class="esquerda">
            <img src={disco} alt="Disco"></img>
            <p>Lado A</p>
        </div>
        <div class="search-container">
            <input type="text" placeholder="Buscar seus vinis favoritos..." />
            <div class="divider"></div>
            <span class="icon"><img src={lupa} alt="Lu"></img></span>
        </div>
        <div class="direita">
            <p>Crie sua conta</p>
            <p>Entre</p>
            <img src={carrinho} alt=""></img>
        </div>
    </header>
    );
}