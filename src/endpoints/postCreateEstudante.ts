import connection from "../conection";
import { Request, Response } from "express";
import { createTurma } from "../services/createTurma";
import { createEstudante } from "../services/createEstudante";

export const postCreateEstudante = async (req: Request, res: Response) => {
    try{
        const {nome, email, data_nasc, turma_id, hobbies} = req.body
        await createEstudante(nome, email, data_nasc, turma_id, hobbies)
        res.status(201).send(`Aluno ${nome} foi adicionado com sucesso`)

    }catch(erro: any){
        res.status(500)
        throw new Error(erro)
    }
}