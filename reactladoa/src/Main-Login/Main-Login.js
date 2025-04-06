import './Main-Login.css'; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import perfil from '../img/perfil.png'
import disco from '../img/disco.png';
import carrinho from '../img/carrinho.png';
import lupa from '../img/lupa.png';
import vinil from '../img/vinil.webp';
import swimming from '../img/swimming-macmiller.png';
import submarine from '../img/submarine-the-marias.png';
import smithereens from '../img/smithereens-joji.png';
import damn from '../img/damn-kendrick-lamar.png';

function Header() {
    return (
        <header>
            <div id="header-title-mainlogin">Lado A</div>
            <div id="searchbar-mainlogin"></div>
            <div id="searchbar-title-mainlogin">Buscar seus vinis favoritos...</div>
            <div id="line-mainlogin"></div>
            <img id="header-perfil-mainlogin" src={perfil} alt="Perfil"></img>
            <div id="header-criar-mainlogin">Olá, RAFAEL DA CRUZ</div>
            <img id="header-disc-mainlogin" src={disco} alt="Disco"></img>
            <img id="header-cart-mainlogin" src={carrinho} alt="Carrinho"></img>
            <img id="searchbar-zoom-mainlogin" src={lupa} alt="Lupa"></img>
        </header>
    );
}

function Navebar() {
    return (
        <div>
            <div id="navebar-limit-mainlogin">
                <img id="navebar-img-mainlogin" src={vinil} alt="Vinil"/>
            </div>
            <div id="navebar-mainlogin"></div>
            <div id= "navebar-text-mainlogin">Principais Produtos:</div>
        </div>
    );
}

function Card({ title, price, parcel, image, onBuyClick }) {
    return (
        <div id="card-mainlogin">
            <div id="layer-card-mainlogin"></div>
            <div id="overlayer-card-mainlogin"></div>
            <img id="image-card-mainlogin" src={image} alt={title} />
            <div id="title-card-mainlogin">{title}</div>
            <div id="subtitle-card-mainlogin">Disco de Vinil</div>
            <div id="price-card-mainlogin">
                <span id="price-mainlogin">R$ {price} </span>
                <span id="or-mainlogin">ou </span>
                <span id="parcel-mainlogin">{parcel}</span>
            </div>
            <div id="button-card-mainlogin" onClick={onBuyClick}>
                <div id="text-button-card-mainlogin">Comprar</div>
            </div>
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

export default function MainLogin() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Navebar />
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
        </div>
    );
}
