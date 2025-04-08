import './Cadastro.css';

import disco from '../img/disco.png';
import carrinho from '../img/carrinho.png';
import lupa from '../img/lupa.png';

function Header() {
    return (
        <header id="header-container-cadastro">
            <div id="header-left-cadastro">
                <img id="header-disc-cadastro" src={disco} alt="Disco" />
                <div id="header-title-cadastro">Lado A</div>
            </div>

            <div id="searchbar-wrapper-cadastro">
                <div id="searchbar-cadastro">
                    <img id="searchbar-zoom-cadastro" src={lupa} alt="Lupa" />
                    <div id="searchbar-title-cadastro">Buscar seus vinis favoritos...</div>
                </div>
            </div>

            <div id="header-right-cadastro">
                <div id="header-perfil-cadastro">Crie a sua conta</div>
                <div id="header-criar-cadastro">Entre</div>
            </div>
            <img id="header-cart-cadastro" src={carrinho} alt="Carrinho" />
        </header>
    );
}

export default function Cadastro(){
    return(
        <Header />
    );
}