import WebFont from 'webfontloader';
import { useEffect } from 'react';

import disco from '../img/disco.png';
import carrinho from '../img/carrinho.png';
import lupa from '../img/lupa.png';
import './Header.css'

export default function Header() {
     useEffect(() => {
            WebFont.load({
              google: {
                families: ['Poppins']
              }
            });
           }, []);
    if(localStorage.getItem("isLogged")){
        return (
                <header id="header-container-login">
                    <div id="header-left-login">
                        <img id="header-disc-login" src={disco} alt="Disco" />
                        <div id="header-title-login">Lado A</div>
                    </div>
                    <div id="header-right-login">
                        <div id="header-perfil-login">Crie a sua conta</div>
                        <div id="header-criar-login">Entre</div>
                    </div>
                </header>
            );
    }
    else{
        return (
            <header id="header-container-headerlogout">
                <div id="header-left-headerlogout">
                    <img id="header-disc-headerlogout" src={disco} alt="Disco" />
                    <div id="header-title-headerlogout">Lado A</div>
                </div>

                <div id="searchbar-wrapper-headerlogout">
                    <div id="searchbar-headerlogout">
                        <img id="searchbar-zoom-headerlogout" src={lupa} alt="Lupa" />
                        <div id="searchbar-title-headerlogout">Buscar seus vinis favoritos...</div>
                    </div>
                </div>

                <div id="header-right-headerlogout">
                    <div id="header-perfil-headerlogout">Crie a sua conta</div>
                    <div id="header-criar-headerlogout">Entre</div>
                </div>
                <img id="header-cart-headerlogout" src={carrinho} alt="Carrinho" />
            </header>
        );
    }
}
