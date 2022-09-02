export class Turma {
    private id: string;
    constructor(
    public nome: string,
    private modulo: string,
    ){
        this.id = Date.now().toString()
    }

}