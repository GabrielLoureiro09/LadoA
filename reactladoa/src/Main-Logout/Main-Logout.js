import './Main-Logout.css'; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <header id="header-container-mainlogout">
            <div id="header-left-mainlogout">
                <img id="header-disc-mainlogout" src={disco} alt="Disco" />
                <div id="header-title-mainlogout">Lado A</div>
            </div>

            <div id="searchbar-wrapper-mainlogout">
                <div id="searchbar-mainlogout">
                    <img id="searchbar-zoom-mainlogout" src={lupa} alt="Lupa" />
                    <div id="searchbar-title-mainlogout">Buscar seus vinis favoritos...</div>
                </div>
            </div>

            <div id="header-right-mainlogout">
                <div id="header-perfil-mainlogout">Crie a sua conta</div>
                <div id="header-criar-mainlogout">Entre</div>
            </div>
            <img id="header-cart-mainlogout" src={carrinho} alt="Carrinho" />
        </header>
    );
}

function Navebar() {
    return (
        <div>
            <div id="navebar-limit-mainlogout">
                <img id="navebar-img-mainlogout" src={vinil} alt="Vinil"/>
            </div>
            <div id="navebar-mainlogout"></div>
            <div id= "navebar-text-mainlogout">Principais Produtos:</div>
        </div>
    );
}

function Card({ title, price, parcel, image, onBuyClick }) {
    return (
        <div id="card-mainlogout">
            <div id="layer-card-mainlogout"></div>
            <div id="overlayer-card-mainlogout"></div>
            <img id="image-card-mainlogout" src={image} alt={title} />
            <div id="title-card-mainlogout">{title}</div>
            <div id="subtitle-card-mainlogout">Disco de Vinil</div>
            <div id="price-card-mainlogout">
                <span id="price-mainlogout">R$ {price} </span>
                <span id="or-mainlogout">ou </span>
                <span id="parcel-mainlogout">{parcel}</span>
            </div>
            <div id="button-card-mainlogout" onClick={onBuyClick}>
                <div id="text-button-card-mainlogout">Comprar</div>
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

export default function MainLogout() {
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
                        onBuyClick={() => navigate('/login')}
                    />
                ))}
            </div>
        </div>
    );
}