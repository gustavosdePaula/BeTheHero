import React from 'react'

import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import {FiPower} from 'react-icons/fi'
import {FiTrash2} from 'react-icons/fi'

import './styles.css'

export default function Profile () {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo"/>
                <span>Bem-Vinda, ONG</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button>
                    <FiPower size={18} color="#e02041"></FiPower>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição</p>

                    <strong>VALOR</strong>
                    <p>R$ 10</p>

                    <button>
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição</p>

                    <strong>VALOR</strong>
                    <p>R$ 10</p>

                    <button>
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição</p>

                    <strong>VALOR</strong>
                    <p>R$ 10</p>

                    <button>
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição</p>

                    <strong>VALOR</strong>
                    <p>R$ 10</p>

                    <button>
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
            </ul>
        </div>
    )
}