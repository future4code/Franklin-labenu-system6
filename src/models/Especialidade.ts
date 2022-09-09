import { idGenerator } from "../services/idGenerator";

export class Especialidade {
    public id: string;
    constructor(
    private nome: string
    ){
        this.id = idGenerator();
        this.nome = nome
    }
}