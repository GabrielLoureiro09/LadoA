import '../../styles/Main-Logout.css'; 
import Header from '../../components/Header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebFont from 'webfontloader';

import vinil from '../../img/vinil.webp';
import swimming from '../../img/swimming-macmiller.png';
import submarine from '../../img/submarine-the-marias.png';
import smithereens from '../../img/smithereens-joji.png';
import damn from '../../img/damn-kendrick-lamar.png';

function Navbar() {
    return (
        <div>
            <div id="navbar-limit-mainlogout">
                <img id="navbar-img-mainlogout" src={vinil} alt="Vinil"/>
            </div>
            <div id="navbar-mainlogout"></div>
            <div id= "navbar-text-mainlogout">Principais Produtos:</div>
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
                <span id="or-mainlogout">ou </span><br/>
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

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Poppins']
          }
        });
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
                        onBuyClick={() => navigate('/login')}
                    />
                ))}
            </div>
        </div>
    );
}