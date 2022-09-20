import connection from "../conection";
import { Request, Response } from "express";
import { createTurma } from "../services/createTurma";

export const putModulo = async (req: Request, res: Response) => {
    try{
        const {id, modulo} = req.body
        await connection('labenu_turma').where('id', id).update({modulo: modulo})
        res.status(200).send(`Modulo atualizado`)

    }catch(erro: any){
        res.status(500)
        throw new Error(erro)
    }
}