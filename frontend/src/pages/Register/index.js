import React from 'react';
import {FiArrowLeft} from 'react-icons/fi';

import { Link } from 'react-router-dom'

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"></FiArrowLeft>
                        Não tenho Cadastro
                    </Link>
                </section>
                
                <form>                   
                    <input placeholder="Nome da ONG"></input>
                    <input type="email" placeholder="E-mail"/>
                    <input type="number" placeholder="Whatsapp"/>

                    <div className="input-group">
                        <input type="text" placeholder="Cidade"/>
                        <input type="text" placeholder="UF" style={{width:80}}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>            
                    
                </form>            
            </div>
        </div>
    );
}