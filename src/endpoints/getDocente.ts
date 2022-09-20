import connection from "../conection";
import { Request, Response } from "express";

export const getDocente = async (req: Request, res: Response) => {
    const result = await connection.select('*').from('labenu_docente')
    res.status(200).send(result)
}