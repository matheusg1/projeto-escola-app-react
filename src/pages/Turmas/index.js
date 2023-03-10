import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getEscolas, getTurmasByEscola } from "../../services/getEscolas";
import api from "../../services/api";

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import logoImage from "../../assets/logo-favicon.svg";

export default function Turmas() {
    const [turmas, setTurmas] = useState([]);
    const [escolas, setEscolas] = useState([]);
    const [escola, setEscola] = useState("Escola");

    const navigator = useNavigate();

    useEffect(() => {
        getEscolas(setEscolas);
    }, []);

    async function deleteTurma(id) {
        try {
            await api.delete(`turma/delete/`, {
                params: { Id: id },
            });
            setTurmas(turmas.filter((t) => t.turmaId != id));
        } catch (error) {
            alert("Erro ao excluir turma");
        }
    }

    async function editTurma(id) {
        try {
            navigator(`/turma/new/${id}`);
        } catch (error) {
            console.log(error);
            alert("Erro ao editar turma");
        }
    }
    const handleSelect = (e) => {
        let escolaInfo = e.split(",")
        setEscola(escolaInfo[1])
        getTurmasByEscola(setTurmas, escolaInfo[0]);
    }

    return (
        <div className="mt-3 mx-5">
            <header className="d-flex flex-row align-items-center justify-content-between">
                <img src={logoImage} style={{ height: "70px" }} alt="logo" />
                <h2 className="px-4">
                    Bem vindo!
                </h2>
                <Link className="btn btn-dark btn-lg" to="/turma/new/0">
                    Cadastrar nova turma
                </Link>
            </header>
            <h1 className="mt-5">Turmas</h1>
            <DropdownButton data-bs-theme="light" id="dropdown-basic-button" variant="dark" size="lg" title={escola} onSelect={handleSelect
            }>
                {escolas &&
                    escolas.map((e) => (
                        <Dropdown.Item eventKey={[e.escolaId, e.nome]} key={e.escolaId} value={e.escolaId}>{e.nome}</Dropdown.Item>
                    ))}
            </DropdownButton>

            {turmas.length > 0 &&
                <table className="table table-hover table-bordered table-striped table-dark mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Escola</th>
                            <th scope="col">Turma</th>
                            <th scope="col">Alunos</th>
                            <th scope="col">Alterar / Apagar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {turmas.map((t) => (
                            <tr key={t.turmaId}>
                                <td>{escola}</td>
                                <td>{t.codigo}</td>
                                <td>{t.quantidadeAlunos}</td>
                                <td className="d-block">
                                    <Button className="my-1" variant="outline-primary" onClick={() => editTurma(t.turmaId)}>Editar</Button>{' '}
                                    <Button variant="outline-danger" onClick={() => deleteTurma(t.turmaId)}>Apagar</Button>{' '}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div >
    );
}