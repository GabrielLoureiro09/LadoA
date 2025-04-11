import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './../../styles/Cadastro.css';

import vinil from '../../img/vinil.webp';
import email from '../../img/email.png';
import cadeado from '../../img/cadeado.png';
import nome from '../../img/nome.png'
import Header from '../../components/Header'

function Navbar() {
    return (
        <div>
            <div id="navbar-limit-cadastro">
                <img id="navbar-img-cadastro" src={vinil} alt="Vinil" />
            </div>
            <div id="navbar-cadastro"></div>
            <div id="navbar-text-cadastro">Cadastre sua conta</div>
        </div>
    );
}

function Container() {
    const emailRef = useRef();
    const senhaRef = useRef();
    const nomeRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const senha = senhaRef.current.value;
        
        navigate('/mainlogin', { state: { email, senha } });
    };
    
    return (
        <div>
            <div id="container-cadastro">
                <form onSubmit={handleSubmit} id="form-cadastro">
                    <div id="email-box-cadastro">
                        <div id="email-background-cadastro"></div>
                        <div id="email-icon-cadastro"></div>
                        <img id="email-img-cadastro" src={email} alt="Ícone de e-mail" />
                        <label>
                            <input id="email-text-cadastro" type="email" ref={emailRef} name="email" placeholder="rafael.cruz@gmail.com" />
                        </label>
                        <div id="email-label-cadastro">Insira seu e-mail</div>
                    </div>

                    <div id="nome-box-cadastro">
                        <div id="nome-background-cadastro"></div>
                        <div id="nome-icon-cadastro"></div>
                        <img id="nome-img-cadastro" src={nome} alt="Ícone de usuário" />
                        <label>
                            <input id="nome-text-cadastro" type="text" ref={nomeRef} name="nome" placeholder="Rafael da Cruz" />
                        </label>
                        <div id="nome-label-cadastro">Insira seu nome</div>
                    </div>

                    <div id="senha-box-cadastro">
                        <div id="senha-background-cadastro"></div>
                        <div id="senha-icon-cadastro"></div>
                        <div id="senha-input-background-cadastro"></div>
                        <label>
                            <input id="senha-text-cadastro" type="password" ref={senhaRef} name="senha" placeholder="******" />
                        </label>
                        <div id="senha-label-cadastro">Insira sua senha</div>
                        <div id="senha-requisitos-cadastro">A senha deve conter ao menos um caracter especial (! @ # $ % & *) e um tamanho de 8 dígitos</div>
                        <img id="senha-img-cadastro" src={cadeado} alt="Ícone de senha" />
                    </div>
                </form>
                <button id="botao-cadastro" type="submit">
                        Cadastrar
                </button>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

export default function Cadastro() { 
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
