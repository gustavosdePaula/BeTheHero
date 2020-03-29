import React from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import { Link } from 'react-router-dom'

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function NewIncident(){
    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"></img>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041"></FiArrowLeft>
                    Voltar para home
                </Link>
            </section>
            
            <form>                   
                <input placeholder="Título do Caso"></input>
                <textarea  placeholder="Descrição"/>
                <input type="number" placeholder="Valor em reais"/>

        
                <button className="button" type="submit">Cadastrar</button>            
                
            </form>            
        </div>
    </div>
    )
}