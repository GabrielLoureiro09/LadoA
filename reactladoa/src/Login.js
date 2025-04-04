import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import disco from './img/disco.png';
import carrinho from './img/carrinho.png';
import lupa from './img/lupa.png';
import vinil from './img/vinil.webp';
import email from './img/email.png';
import cadeado from './img/cadeado.png';

function Header() {
    return (
        <header>
            <div id="header-title">Lado A</div>
            <div id="searchbar"></div>
            <div id="searchbar-title">Buscar seus vinis favoritos...</div>
            <div id="line"></div>
            <div id="header-entrar">Entre</div>
            <div id="header-criar">Crie a sua conta</div>
            <img id="header-disc" src={disco} alt="Disco" />
            <img id="header-cart" src={carrinho} alt="Carrinho" />
            <img id="searchbar-zoom" src={lupa} alt="Lupa" />
        </header>
    );
}

function Navebar() {
    return (
        <div>
            <div id="navebar-limit">
                <img id="navebar-img" src={vinil} alt="Vinil" />
            </div>
            <div id="navebar"></div>
            <div id="navebar-text">Digite seu e-mail ou telefone para iniciar sessão:</div>
        </div>
    );
}

function Container() {
    const emailRef = useRef();
    const senhaRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita o recarregamento da página
        const email = emailRef.current.value;
        const senha = senhaRef.current.value;
        
        navigate('/mainlogin', { state: { email, senha } });
    };
    
    return (
        <div>
            <div id="container"></div>
            <div id="texto-email">Preencha com seu e-mail</div>
            
            <form onSubmit={handleSubmit}>
                <div id="email-box">
                    <div id="email-background"></div>
                    <img id="email-img" src={email} alt="Ícone de e-mail" />
                    <label>
                        <input id="email-text" type="text" ref={emailRef} name="email" placeholder="rafael.cruz@gmail.com" />
                    </label>
                    <div id="email-label">Insira seu e-mail</div>
                </div>

                <div id="senha-box">
                    <div id="senha-background"></div>
                    <div id="senha-icon"></div>
                    <div id="senha-input-background"></div>
                    <label>
                        <input id="senha-text" type="password" ref={senhaRef} name="senha" placeholder="******" />
                    </label>
                    <div id="senha-label">Crie sua senha</div>
                    <div id="senha-requisitos">A senha deve conter ao menos um caracter especial (! @ # $ % & *) e um tamanho de 8 dígitos</div>
                    <img id="senha-img" src={cadeado} alt="Ícone de senha" />
                </div>

                <button id="botao-login" type="submit">
                    Iniciar sessão
                </button>
            </form>
        </div>
    );
}

export default function Login() {    
    return (
        <div>
            <Header />
            <Navebar />
            <Container />
        </div>
    );
}
