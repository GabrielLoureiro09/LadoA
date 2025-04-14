import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import disco from '../img/disco.png';
import carrinho from '../img/carrinho.png';
import lupa from '../img/lupa.png';
import perfil from '../img/perfil.png'
import '../styles/Header.css'

export default function Header() {
    const location = useLocation();
     useEffect(() => {
            WebFont.load({
              google: {
                families: ['Poppins']
              }
            });
           }, []);

    if(localStorage.getItem("isLogged")){
       return (
               <header id="header-container">
                   <div id="header-logo">
                    <img id="header-disc" src={disco} alt="Disco" />
                    <h1>Lado A</h1>
                    </div>
       
                    <div id="searchbar">
                        <img id="searchbar-zoom" src={lupa} alt="Lupa" />
                        <input id="searchbar-title" type='text' placeholder='Buscar seus vinis favoritos...' />
                    </div>
       
                   <div id="header-login">
                        <div id='profile'>
                       <img id="header-perfil-image" src={perfil} alt="Perfil" />
                       <div id="header-criar">Olá, RAFAEL DA CRUZ</div>
                       </div>
                       <img id="header-cart" src={carrinho} alt="Carrinho" />
                   </div>
                </header>
        );
    }
    else if(location.pathname == "/cadastro" || location.pathname == "/login"){
        return (
            <header id="header-container"style={{ height: 70 + "px"}}>
                <div id="header-logo">
                    <img id="header-disc" src={disco} alt="Disco" />
                    <div id="header-title">Lado A</div>
                </div>
                <div id="header-login">
                    <div id="header-perfil">Crie a sua conta</div>
                    <div id="header-criar">Entre</div>
                </div>
            </header>
        );
    }
    else{
        return (
            <header id="header-container" >
                <div id="header-logo">
                    <img id="header-disc" src={disco} alt="Disco" />
                    <h1>Lado A</h1>
                </div>

                    <div id="searchbar">
                        <img id="searchbar-zoom" src={lupa} alt="Lupa" />
                        <input id="searchbar-title" type='text' placeholder='Buscar seus vinis favoritos...' />
                    </div>

                <div id="header-login">
                    <div id="header-perfil">Crie a sua conta</div>
                    <div id="header-criar">Entre</div>
                    <img id="header-cart" src={carrinho} alt="Carrinho" />
                </div>
            </header>
        );
    }
}
