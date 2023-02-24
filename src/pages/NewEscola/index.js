import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import api from '../../services/api'
import "./styles.css";
import logoImage from "../../assets/logo.svg";

export default function NewEscola() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');

    const navigator = useNavigate();

    async function createEscola(e) {
        e.preventDefault();

        const data = {
            nome,
            endereco
        }
        
        //const accessToken = localStorage.getItem('accessToken');
        
        try {
            await api.post('/Escola/Create', data
            /*
            , {            
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
                
            }*/
            )
        } catch (error) {
            alert("Erro ao cadastrar escola")
        }
        navigator('/escolas')
    }

    return (
        <div className="new-escola-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="logo" />
                    <h1>Cadastrar Escola</h1>
                    <p>Coloque as informações da escola e clique em 'Cadastrar'</p>
                    <Link className="back-link" to="/escolas">

                    </Link>
                </section>
                <form onSubmit={createEscola}>
                    <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                    <input placeholder="Endereço" value={endereco} onChange={e => setEndereco(e.target.value)} />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}