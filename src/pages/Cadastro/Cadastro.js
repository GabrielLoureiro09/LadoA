import '../../styles/Cadastro.css';

import disco from '../../img/disco.png';
import vinil from '../../img/vinil.webp';
import perfil from '../../img/perfil1.png';
import cadeado from '../../img/cadeado1.png';   
import email from '../../img/email1.png';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


function Container(){
    const nomeRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const nome = nomeRef.current.value;
        
    navigate('/mainlogin', { state: { nome } });
    };

    return(
    <div class="classe-mae">
        <div class="descricao-pagina-cadastro">
            <p>Preencha os dados para criar a conta.</p>
        </div>
        <div class="container-cadastro">
        <form onSubmit={handleSubmit} id='form-cadastro'>
            <div class="area-cadastro">
                <div class="imagem-senha">
                    <img class="img-email" src={email} alt='email'/>
                </div>
                <div id="texto-senha">
                    <p>Insira seu e-mail.</p>
                    <input type='text' placeholder='rafaelbarreto@email.com' id='input-cadastro'/>
                </div>
            </div>
            <div class="area-cadastro">
                <div class="imagem-perfil">
                    <img class="img-perfil" src={perfil} alt='email'/>
                </div>
                <div id="texto-senha">
                    <p>Insira seu nome de usuário</p>
                    <input type='text' ref={nomeRef} placeholder='Rafael Barreto' id='input-cadastro'/>
                </div>
            </div>
            
            <div class="area-cadastro">
                <div class="imagem-senha">
                    <img class="img-senha" src={cadeado} alt='email'/>
                </div>
                <div id="texto-senha">
                    <p>Insira sua senha.</p>
                    <input type='text' placeholder='****' id='input-cadastro'/>
                </div>
            </div>
            <button id="botao-cadastro" type="submit">
                <p>Iniciar sessão</p>
            </button>
        </form>
    </div>
    </div>
    );
}

export default function Cadastro(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div>
            <Header />
            <Navbar />
            <Container />
        </div>

    );
}