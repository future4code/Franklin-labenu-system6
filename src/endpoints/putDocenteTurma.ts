import connection from "../conection";
import { Request, Response } from "express";

export const putDocenteTurma = async (req: Request, res: Response) => {
    try{
        const {id, turma_id} = req.body
        await connection('labenu_docente').where('id', id).update({turma_id: turma_id})
        res.status(200).send(`Turma atualizada`)

    }catch(erro: any){
        res.status(500)
        throw new Error(erro)
    }
}