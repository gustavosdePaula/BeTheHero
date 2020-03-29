import React, {useState, useEffect} from 'react'

import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import {FiPower} from 'react-icons/fi'
import {FiTrash2} from 'react-icons/fi'

import './styles.css'

import api from '../../services/api'

export default function Profile () {
    
    const history = useHistory()
    const [incidents, set_incidents] = useState([]);

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            set_incidents(response.data)
        })
    }, [ongId])

    async function handleDelete (id) {
        try {
          await api.delete(`/incidents/${id}`, {
              headers: {
                  Authorization: ongId,
              }
          })
          set_incidents(incidents.filter(incident => incident.id != id))  
        } catch (error) {
            alert(`Erro ao deletar o caso. ${error}`)
        }
    }
    
    function handleLogout (){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo"/>
                <span>Bem-Vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout}>
                    <FiPower size={18} color="#e02041"></FiPower>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency: "BRL"}).format(incident.value)}</p>

                        <button onClick={() => handleDelete(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}