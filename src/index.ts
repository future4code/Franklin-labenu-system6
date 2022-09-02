import { Estudante } from "./models/Estudante";
import { Docente } from "./models/Docente";
import { Turma } from "./models/Turma";
import { Especialidade } from "./models/Especialidade";
import { Hobbie } from "./models/Hobbie";

const hobbie = new Hobbie('Jogar')
const estudante = new Estudante([hobbie], 'teste', 'teste', '00/00/0000', 1)

const turma = new Turma('teste', '01')
console.log(turma);






