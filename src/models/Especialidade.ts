export class Especialidade {
    private id: string;
    constructor(
    private nome: string
    ){
        this.id = Date.now().toString();
        this.nome = nome
    }
}