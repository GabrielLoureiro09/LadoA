import React, { useRef } from 'react';
import './Main-Login.css'; 

function Header() {
    return (
        <header>
            <div id="header-title">Lado A</div>
            <div id="searchbar"></div>
            <div id="searchbar-title">Buscar seus vinis favoritos...</div>
            <div id="line"></div>
            <img id="header-perfil" src="./img/perfil.png"></img>
            <div id="header-criar">Olá, RAFAEL DA CRUZ</div>
            <img id="header-disc" src="./img/disco.png"></img>
            <img id="header-cart" src="./img/carrinho.png"></img>
            <img id="searchbar-zoom" src="./img/lupa.png"></img>
        </header>
    );
}

function Navebar() {
    return (
        <div>
            <div id="navebar-limit">
                <img id="navebar-img" src="./img/vinil.webp"/>
            </div>
            <div id="navebar"></div>
            <div id= "navebar-text">Principais Produtos:</div>
        </div>
    );
}

function Card() {
    <div id="card">
        <div id="layer-card"></div>
        <div id="title-card">Swimming - Mac Miller</div>
        <div id="price-card">
            <span id="price">R$ 319,99 </span>
            <span id="or">ou</span>
            <span id="parcel"> 12x de R$ 31,99</span></div>
        <div id="overlayer-card"></div>
        <img id="image-card" src="./img/swimming-macmiller.png" />
        <div id="subtitle-card">Disco de Vinil</div>
        <div id="button-card"></div>
        <div id="text-button-card">Comprar</div>
    </div>
}

export default function MainLogin() {    
    return (
        <div>
            <Header />
            <Navebar />
            <Card />
        </div>
    );
}

    {/* <div id="card-2">
        <div id="layer-card-2"></div>
        <div id="button-card-2"></div>
        <div id="text-button-card-2">Comprar</div>
        <div id="title-card-2">Submarine - The Marias</div>
        <div id="price-card-2">
            <span id="price">R$ 400,00 </span>
            <span id="or">ou</span>
            <span id="parcel"> 10x de R$ 40,00/>
        </div>
        <div id="subtitle-card-2">Disco de Vinil</div>
        <div id="overlayer-card-2"></div>
        <img id="image-card-2" src="./img/submarine-the-marias.png" />
    </div>
    <div id="card-3">
        <div id="layer-card-3"></div>
        <div id="title-card-3">Smithereens - Joji</div>
        <div id="price-card-3">
            <span id="price" >R$ 319,99 </span>
            <span id="or">ou</span>
            <span id="parcel"> 12x de R$ 31,99</span>
        </div>
        <div id="overlayer-card-3"></div>
        <div id="button-card-3"></div>
        <div id="text-button-card-3">Comprar</div>
        <div id="subtitle-card-3">Disco de Vinil</div>
        <img id="image-card-3" src="./img/smithereens-joji.png" />
    </div>
    <div id="card-4">
        <div id="layer-card-4"></div>
        <div id="title-card-4">DAMN. - Kendrick Lamar</div>
        <div id="price-card-4">
            <span id="price">R$ 375,50 </span>
            <span id="or">ou</span>
            <span id="parcel"> 12x de R$ 37,55</span>
        </div>
        <div id="overlayer-card-4"></div>
        <div id="button-card-4"></div>
        <div id="text-button-card-4">Comprar</div>
        <div id="subtitle-card-4">Disco de Vinil</div>
        <img id="image-card-4" src="./img/damn-kendrick-lamar.png" />
    </div> */}