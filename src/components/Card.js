import '../styles/MainLogin.css'

export default function Card({ title, price, parcel, image, onBuyClick }) {
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