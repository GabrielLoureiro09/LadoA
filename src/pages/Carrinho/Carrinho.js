import '../../styles/Carrinho.css'; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import vinil from '../../img/vinil.webp';
import swimming from '../../img/swimming-macmiller.png';
import submarine from '../../img/submarine-the-marias.png';
import smithereens from '../../img/smithereens-joji.png';
import damn from '../../img/damn-kendrick-lamar.png';

import Header from '../../components/Header';

function Navbar() {
    return (
        <div>
            <div id="navbar-limit-carrinho">
                <img id="navbar-img-carrinho" src={vinil} alt="Vinil"/>
            </div>
            <div id="navbar-carrinho"></div>
            <div id= "navbar-text-carrinho">Produtos no carrinho:</div>
        </div>
    );
}

function Card({ title, price, parcel, image, onBuyClick }) {
    return (
        <div id="card-carrinho">
            <img id="image-card-carrinho" src={image} alt={title} />
            <div className="card-content-carrinho">
                <div id="title-card-carrinho">{title}</div>
                <div id="subtitle-card-carrinho">Disco de Vinil</div>
                <div id="price-card-carrinho">
                    <span id="price-carrinho">R$ {price}</span>
                    <span id="or-carrinho"> ou </span>
                    <span id="parcel-carrinho">{parcel}</span>
                </div>
            </div>
            <div id="quantidade-card-carrinho">x 1</div>
        </div>    
    );
}

const produtos = [
    {
        title: 'Swimming - Mac Miller',
        price: '319,99',
        parcel: '12x de R$ 31,99',
        image: swimming
    },
    {
        title: 'Submarine - The Marias',
        price: '400,00',
        parcel: '10x de R$ 40,00',
        image: submarine
    },
    {
        title: 'Smithereens - Joji',
        price: '319,99',
        parcel: '12x de R$ 31,99',
        image: smithereens
    },
    {
        title: 'DAMN. - Kendrick Lamar',
        price: '375,50',
        parcel: '12x de R$ 37,55',
        image: damn
    }
];

export default function Carrinho() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Navbar />
            <div id="cards-container">
                {produtos.map((p, index) => (
                    <Card
                        key={index}
                        title={p.title}
                        price={p.price}
                        parcel={p.parcel}
                        image={p.image}
                        onBuyClick={() => navigate('/checkout', { state: { product: p } })}
                    />
                ))}
            </div>

            <div id="comprar-container">
                <button id="comprar-button">Finalizar a compra</button>
            </div>
        </div>
    );
}
