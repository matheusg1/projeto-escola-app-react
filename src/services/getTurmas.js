import api from "./api";

export async function getEscolaIdByTurma(setEscolaId, id) {
    try {
        const response = await api.get(`turma/findByID/?Id=${id}`);
        console.log("id da turma " + id)        
        console.log("id da escola " + response.data.escolaId);
        setEscolaId(response.data.escolaId);
    } catch (error) {
        alert("Falha ao buscar escola");
    }
}

export async function getTurmas(setTurmas) {
    try {
        const response = await api.get("turma/findAll");
        setTurmas(response.data);
    } catch (error) {
        alert("Falha ao buscar turmas");
    }
}

export async function getMateriasByTurma(setMaterias, id) {
    try {
        const response = await api.get(`turma/findByID/?Id=${id}`);
        setMaterias(response.data.materias);
    } catch (error) {
        alert("Falha ao buscar Matérias");
    }
}

export async function getAlunosByTurma(setAlunos, id) {
    try {
        const response = await api.get(`turma/findByID/?Id=${id}`);
        setAlunos(response.data.alunos);
    } catch (error) {
        alert("Falha ao buscar alunos");
    }
}