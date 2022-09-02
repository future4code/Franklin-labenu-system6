export abstract class Pessoa {
    protected id: string;
    protected nome: string;
    protected email: string;
    protected data_nasc: string;
    protected turma_id: number;

    constructor(
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: number,
    ){
        this.id = Date.now().toString();
        this.nome = nome;
        this.email = email;
        this.data_nasc = data_nasc;
        this.turma_id = turma_id
    }
}