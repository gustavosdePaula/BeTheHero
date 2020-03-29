import React, {useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

export default function NewIncident(){

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    const [title, set_title] = useState('')
    const [description, set_description] = useState('')
    const [value, set_value] = useState('')

    async function handleNewincident (e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId
                }
            } )
            history.push('/profile')
        } catch (error) {
            alert(`Erro ao cadastrar novo caso. ${error}`)
        }
        

    }

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
            
            <form onSubmit={handleNewincident}>                   
                <input 
                    placeholder="Título do Caso"
                    value={title}
                    onChange={e => set_title(e.target.value)}
                ></input>
                <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e => set_description(e.target.value)}
                />
                <input 
                    type="number" placeholder="Valor em reais"
                    value={value}                    
                    onChange={e => set_value(e.target.value)}
                />

        
                <button className="button" type="submit">Cadastrar</button>            
                
            </form>            
        </div>
    </div>
    )
}