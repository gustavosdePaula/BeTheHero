import React, {useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom'

import './styles.css';

import api from '../../services/api'


import logoImg from '../../assets/logo.svg'

export default function Register(){

    const [name, set_name] = useState('');
    const [email, set_email] = useState('');
    const [whatsapp, set_whatsapp] = useState('');
    const [city, set_city] = useState('');
    const [uf, set_uf] = useState('');
    
    const history = useHistory();


    async function handleRegister(e) {
        e.preventDefault()

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        

        try {
            const response = await api.post('ongs', data);
            alert(`Seu cadastro foi realizado com sucesso! Sua ID é: ${response.data.id}`)
            history.push('/');
        } catch (error) {
            alert(`Erro no cadastro. ${error}`)
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"></FiArrowLeft>
                        Voltar para home
                    </Link>
                </section>
                
                <form onSubmit={handleRegister}>                   
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e => set_name(e.target.value)}
                    />
                    <input 
                        type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => set_email(e.target.value)}
                    />
                    <input 
                        type="number" placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => set_whatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            type="text" placeholder="Cidade"
                            value={city}
                            onChange={e => set_city(e.target.value)}
                        />
                        <input 
                            type="text" placeholder="UF" style={{width:80}}
                            value={uf}
                            onChange={e => set_uf(e.target.value)}    
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>            
                    
                </form>            
            </div>
        </div>
    );
}