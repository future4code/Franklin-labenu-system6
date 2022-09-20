import { Request, Response } from "express";
import { createDocente } from "../services/createDocente";

export const postCreateDocente = async (req: Request, res: Response) => {
    try{
        const {nome, email, data_nasc, turma_id, especialidades} = req.body
        await createDocente(nome, email, data_nasc, turma_id, especialidades)
        res.status(201).send(`Docente ${nome} foi adicionado com sucesso`)

    }catch(erro: any){
        res.status(500)
        throw new Error(erro)
    }
}