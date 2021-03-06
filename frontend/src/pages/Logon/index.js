import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'

import './styles.css';

import api from '../../services/api'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon(){

    const [id, set_id] = useState('');
    const history = useHistory()

    async function handleLogin (e) {
        e.preventDefault();

        try {
            const response = await api.post('/session',{id})
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile')
            
        } catch (error) {
            alert(`Erro ao realizar login. ${error}`)
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"></img>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => set_id(e.target.value)}

                    ></input>
                    <button className="button" type="submit">Entrar</button>            
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"></FiLogIn>
                        Não tenho Cadastro
                    </Link>
                </form>
            </section>
        <img src={heroesImg} alt="Heroes"></img>
        </div>
    );
}