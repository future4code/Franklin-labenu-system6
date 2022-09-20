import connection from "../conection";
import { Hobbie } from "../models/Hobbie";

export const createHobbie = async (nome: string) => {

    const hobbie = new Hobbie(nome);

    await connection.insert(hobbie).into('labenu_hobby')
}