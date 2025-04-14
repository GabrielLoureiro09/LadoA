import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './../../styles/Cadastro.css';

import vinil from '../../img/vinil.webp';
import email from '../../img/email.png';
import cadeado from '../../img/cadeado.png';
import nome from '../../img/nome.png'
import Header from '../../components/Header'
import { createUser} from '../../api.js';

import Navbar from '../../components/Navbar.js';

function Container() {
    const emailRef = useRef();
    const senhaRef = useRef();
    const nomeRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const nome = emailRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const senha = senhaRef.current.value.trim();
    
        if (!email || !senha) {
          alert("Preencha todos os campos!");
          return;
        }
    
        const user = {
          nome,
          email,
          telefone: "987",
          senha
        };
        
        const response = await createUser(user);

        if (response) {
          alert("Usuário criado com sucesso!");
          navigate('/mainlogin', { state: { email, senha } });
        } else {
          alert("Erro ao criar usuário.");
        }
      };
    
    return (
        <div id='container-content'>
            <div id="container-cadastro">
                <form onSubmit={handleSubmit} id="form-cadastro">
                <div id="nome-box-cadastro">
                        <div id="nome-background-cadastro"></div>
                        <div id="nome-icon-cadastro"></div>
                        <img id="nome-img-cadastro" src={nome} alt="Ícone de usuário" />
                        <label>
                            <input id="nome-text-cadastro" type="text" ref={nomeRef} name="nome" placeholder="Rafael da Cruz" />
                        </label>
                        <div id="nome-label-cadastro">Insira seu nome</div>
                    </div>

                    <div id="email-box-cadastro">
                        <div id="email-background-cadastro"></div>
                        <div id="email-icon-cadastro"></div>
                        <img id="email-img-cadastro" src={email} alt="Ícone de e-mail" />
                        <label>
                            <input id="email-text-cadastro" type="email" ref={emailRef} name="email" placeholder="rafael.cruz@gmail.com" />
                        </label>
                        <div id="email-label-cadastro">Insira seu e-mail</div>
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
             <Navbar tamanho="90px" texto="Realize seu Cadastro"  />
            <Container />
        </div>
    );
}
