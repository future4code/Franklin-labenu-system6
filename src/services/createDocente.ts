import connection from "../conection";
import { Docente } from "../models/Docente";
import { Especialidade } from "../models/Especialidade";
import { idGenerator } from "./idGenerator";

export const createDocente = async (nome: string, email: string, data_nasc: string, turma_id: string, especialidades: Array<string>) => {
    data_nasc = data_nasc.split('/').reverse().join('-')

    const docente = new Docente(especialidades.map((especialidade) => {return new Especialidade(especialidade)}), nome, email, data_nasc, turma_id)

    await connection.insert(
        {
            id: docente.id,
            nome: docente.nome,
            email: docente.email,
            data_nasc: docente.data_nasc,
            turma_id: docente.turma_id
        }
    ).into('labenu_docente')

    docente.especialidades.map(async (especialidade) => {
        await connection.insert(especialidade).into('labenu_especialidades')
    })

    docente.especialidades.map(async (especialidade) => {
        await connection.insert({
            id: idGenerator(),
            docente_id: docente.id,
            especialidae_id: especialidade.id
        }).into('labenu_docente_especialidade')
    })
}