import connection from "../conection";

export const findEstudanteByName = async (name: string) => {
    const result = await connection.select('*').from('labenu_estudante').where('nome', 'like', `%${name}%`)
    return result
}