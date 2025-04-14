import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../../styles/Login.css';
import '../../styles/Geral.css'

import vinil from '../../img/vinil.webp';
import email from '../../img/email.png';
import cadeado from '../../img//cadeado.png';
import Header from '../../components/Header'

import { getClienteByMail, verifyCliente} from '../../api.js';
import Navbar from '../../components/Navbar.js';

function Container() {
    const emailRef = useRef();
    const senhaRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const senha = senhaRef.current.value;

        const cliente = { email, senha }; // 👈 você precisa criar o objeto aqui
        console.log(cliente)
        const response = await verifyCliente(cliente);
        console.log(response)

        if (response) {
            localStorage.setItem("nome", response.nome);
            localStorage.setItem("email", response.email);
            alert("deu certo, existe")
            navigate('/', { state: { email, senha } });
        } else {
            alert("Email ou senha incorretos.");
        }
    };

    return (
        <div id='container-content'>
            <div id="container-login">
                <form onSubmit={handleSubmit} id="form-login">
                    <div id="email-box-login">
                        <div id="email-background-login"></div>
                        <div id="email-icon-login"></div>
                        <img id="email-img-login" src={email} alt="Ícone de e-mail" />
                        <label>
                            <input id="email-text-login" type="email" ref={emailRef} name="email" placeholder="rafael.cruz@gmail.com" />
                        </label>
                        <div id="email-label-login">Insira seu e-mail</div>
                    </div>

                    <div id="senha-box-login">
                        <div id="senha-background-login"></div>
                        <div id="senha-icon-login"></div>
                        <div id="senha-input-background-login"></div>
                        <label>
                            <input id="senha-text-login" type="password" ref={senhaRef} name="senha" placeholder="******" />
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
            <Navbar tamanho="70px" texto="Realize seu Login"/>
            <Container />
        </div>
    );
}
