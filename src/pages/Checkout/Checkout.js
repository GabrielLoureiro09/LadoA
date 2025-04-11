import '../../styles/Checkout.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import perfil from '../../img/perfil.png'
import disco from '../../img/disco.png';
import carrinho from '../../img/carrinho.png';
import lupa from '../../img/lupa.png';

function Header() {
    return (
        <header id="header-container-checkout">
            <div id="header-left-checkout">
                <img id="header-disc-checkout" src={disco} alt="Disco" />
                <div id="header-title-checkout">Lado A</div>
            </div>

            <div id="searchbar-wrapper-checkout">
                <div id="searchbar-checkout">
                    <img id="searchbar-zoom-checkout" src={lupa} alt="Lupa" />
                    <div id="searchbar-title-checkout">Buscar seus vinis favoritos...</div>
                </div>
            </div>

            <div id="header-right-checkout">
                <img id="header-perfil-checkout" src={perfil} alt="Perfil" />
                <div id="header-criar-checkout">Olá, RAFAEL DA CRUZ</div>
            </div>
            <img id="header-cart-checkout" src={carrinho} alt="Carrinho" />
        </header>
    );
}

export default function Checkout() {
    const location = useLocation();
    const produto = location.state?.product;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />

            <div className="checkout-container">
                {/* Topo com imagem e informações */}
                <div className="top-section">
                    <div className="product-image-wrapper">
                        <img className="product-image" src={produto.image} alt={produto.title} />
                    </div>

                    <div className="product-info">
                        <h1 className="album-title">{produto.title}</h1>
                        <h2 className="subtitle">Disco de Vinil</h2>
                        <p className="price">R$ {produto.price}</p>
                        <p className="installments">ou {produto.parcel} sem juros</p><br />
                        <p className="stock">Unidades disponíveis: 7</p><br />
                        <p className="shipping">Chega em até 7 dias</p>
                        <button className="buy-button">Adicionar ao Carrinho</button>
                    </div>
                </div>

                {/* Parte de baixo com descrição e músicas */}
                <div className="bottom-section">
                    <div className="description">
                        <strong>Descrição:</strong>
                        <p>
                            Álbum lançado pelo artista e rapper Malcom McCormick, mais conhecido por seu pseudônimo Mac Miller, retrata as suas lutas com depressão, drogas, relacionamentos, e uma esperança de conseguir superar tudo isso.<br /><br />
                            Lançado em 03 de agosto de 2018.
                        </p>
                    </div>

                    <div className="musics">
                        <strong>Músicas:</strong>
                        <p>
                            - Come Back to Earth<br />
                            - Hurt Feelings<br />
                            - What’s the Use?<br />
                            - Perfecto<br />
                            - Self Care<br />
                            - Wings<br />
                            - Ladders<br />
                            - Small Worlds<br />
                            - Conversation<br />
                            - Dunno<br />
                            - Jet Fuel<br />
                            - 2009<br />
                            - So It Goes
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
