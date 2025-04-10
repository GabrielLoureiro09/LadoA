import WebFont from 'webfontloader';
import { useEffect } from 'react';

import disco from '../img/disco.png';
import carrinho from '../img/carrinho.png';
import lupa from '../img/lupa.png';

export default function Header() {
     useEffect(() => {
            WebFont.load({
              google: {
                families: ['Poppins']
              }
            });
           }, []);
    
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
