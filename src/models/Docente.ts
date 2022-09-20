import { Pessoa } from "./Pessoa";
import { Especialidade } from "./Especialidade";

export class Docente extends Pessoa{
    constructor(
    public especialidades: Array<Especialidade>,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    ){super(nome, email, data_nasc, turma_id)}
}