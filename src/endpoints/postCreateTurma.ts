import connection from "../conection";
import { Request, Response } from "express";
import { createTurma } from "../services/createTurma";

export const postCreateTurma = async (req: Request, res: Response) => {
    try{
        const {nome, modulo} = req.body
        await createTurma(nome, modulo)
        res.status(201).send(`Turam ${nome} foi criada com sucesso`)

    }catch(erro: any){
        res.status(500)
        throw new Error(erro)
    }
}