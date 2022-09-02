import { Pessoa } from "./Pessoa";
import { Especialidade } from "./Especialidade";

export class Docente extends Pessoa{
    constructor(
    private especialidades: Array<Especialidade>,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: number,
    ){super(nome, email, data_nasc, turma_id)}
}