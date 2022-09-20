import connection from "../conection";
import { Request, Response } from "express";

export const getTurmas = async (req: Request, res: Response) => {
    const result = await connection.select('*').from('labenu_turma')
    res.status(200).send(result)
}