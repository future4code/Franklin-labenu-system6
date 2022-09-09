import connection from "../conection";
import { Turma } from "../models/Turma";

export const createTurma = async (nome: string, modulo: string) => {

    const turma = new Turma(nome, modulo);

    await connection.insert(turma).into('labenu_turma')
}