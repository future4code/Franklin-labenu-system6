import connection from "../conection";
import { Request, Response } from "express";
import { findEstudanteByName } from "../services/findEstudanteByName";

export const getEstudante = async (req: Request, res: Response) => {
    const {nome} = req.body
    const estudante = await findEstudanteByName(nome)
    res.status(200).send(estudante)
}