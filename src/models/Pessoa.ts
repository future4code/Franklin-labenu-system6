import { idGenerator } from "../services/idGenerator";

export abstract class Pessoa {
    public id: string;
    public nome: string;
    public email: string;
    public data_nasc: string;
    public turma_id: string;

    constructor(
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string,
    ){
        this.id = idGenerator();
        this.nome = nome;
        this.email = email;
        this.data_nasc = data_nasc;
        this.turma_id = turma_id;
    }
}