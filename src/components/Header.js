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
    const { nome } = location.state || {};
    
     useEffect(() => {
            WebFont.load({
              google: {
                families: ['Poppins']
              }
            });
           }, []);

    if(localStorage.getItem("isLogged")){
       return (
               <header id="header-container-headerlogin">
                   <div id="header-left-headerlogin">
                       <img id="header-disc-headerlogin" src={disco} alt="Disco" />
                       <div id="header-title-headerlogin">Lado A</div>
                   </div>
       
                   <div id="searchbar-wrapper-headerlogin">
                       <div id="searchbar-headerlogin">
                           <img id="searchbar-zoom-headerlogin" src={lupa} alt="Lupa" />
                           <div id="searchbar-title-headerlogin">Buscar seus vinis favoritos...</div>
                       </div>
                   </div>
       
                   <div id="header-right-headerlogin">
                       <img id="header-perfil-headerlogin" src={perfil} alt="Perfil" />
                       <div id="header-criar-headerlogin">Olá, {nome}</div>
                   </div>
                   <img id="header-cart-headerlogin" src={carrinho} alt="Carrinho" />
               </header>
        );
    }
    else if(location.pathname == "/cadastro" || location.pathname == "/login"){
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
