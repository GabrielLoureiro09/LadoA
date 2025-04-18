import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../../styles/Login.css';

import vinil from '../../img/vinil.webp';
import email from '../../img/email.png';
import cadeado from '../../img//cadeado.png';
import Header from '../../components/Header'

function Navbar() {
    return (
        <div>
            <div id="navbar-limit-login">
                <img id="navbar-img-login" src={vinil} alt="Vinil" />
            </div>
            <div id="navbar-login"></div>
            <div id="navbar-text-login">Preencha com seu e-mail</div>
        </div>
    );
}

function Container() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        navigate('/mainlogin');
    };
    
    return (
        <div>
            <div id="container-login">
                <form onSubmit={handleSubmit} id="form-login">
                    <div id="email-box-login">
                        <div id="email-background-login"></div>
                        <div id="email-icon-login"></div>
                        <img id="email-img-login" src={email} alt="Ícone de e-mail" />
                        <label>
                            <input id="email-text-login" type="email" name="email" placeholder="rafael.cruz@gmail.com" />
                        </label>
                        <div id="email-label-login">Insira seu e-mail</div>
                    </div>

                    <div id="senha-box-login">
                        <div id="senha-background-login"></div>
                        <div id="senha-icon-login"></div>
                        <div id="senha-input-background-login"></div>
                        <label>
                            <input id="senha-text-login" type="password" name="senha" placeholder="******" />
                        </label>
                        <div id="senha-label-login">Insira sua senha</div>
                        <div id="senha-requisitos-login">A senha deve conter ao menos um caracter especial (! @ # $ % & *) e um tamanho de 8 dígitos</div>
                        <img id="senha-img-login" src={cadeado} alt="Ícone de senha" />
                    </div>
                    <button id="botao-login" type="submit">
                        Iniciar sessão
                    </button>
                </form>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

export default function Login() { 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Navbar />
            <Container />
        </div>
    );
}
