import connection from "../conection";
import { Estudante } from "../models/Estudante";
import { Hobbie } from "../models/Hobbie";
import { idGenerator } from "./idGenerator";

export const createEstudante = async (nome: string, email: string, data_nasc: string, turma_id: string, hobbies: Array<string>) => {
    data_nasc = data_nasc.split('/').reverse().join('-')

    const estudante = new Estudante(hobbies.map((hobbie) => {return new Hobbie(hobbie)}), nome, email, data_nasc, turma_id)

    await connection.insert(
        {
            id: estudante.id,
            nome: estudante.nome,
            email: estudante.email,
            data_nasc: estudante.data_nasc,
            turma_id: estudante.turma_id
        }
    ).into('labenu_estudante')

    estudante.hobbies.map(async (hobbie) => {
        await connection.insert(hobbie).into('labenu_hobby')
    })

    estudante.hobbies.map(async (hobbie) => {
        await connection.insert({
            id: idGenerator(),
            estudante_id: estudante.id,
            hobby_id: hobbie.id
        }).into('labenu_estudante_hobby')
    })
}