import { Pessoa } from "./Pessoa";
import { Hobbie } from "./Hobbie";

export class Estudante extends Pessoa{
    constructor(
    public hobbies: Array<Hobbie>,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    ){super(nome, email, data_nasc, turma_id)}
}