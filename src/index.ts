import { Estudante } from "./models/Estudante";
import { Docente } from "./models/Docente";
import { Turma } from "./models/Turma";
import { Especialidade } from "./models/Especialidade";
import { Hobbie } from "./models/Hobbie";
import { createTurma } from "./services/createTurma";
import app from "./app";
import { getTurmas } from "./endpoints/getTurmas";
import { postCreateTurma } from "./endpoints/postCreateTurma";
import { putModulo } from "./endpoints/putModulo";
import { postCreateEstudante } from "./endpoints/postCreateEstudante";
import { getEstudante } from "./endpoints/getEstudante";
import { putTurma } from "./endpoints/putTurma";
import { postCreateDocente } from "./endpoints/postCreateDocente";
import { getDocente } from "./endpoints/getDocente";
import { putDocenteTurma } from "./endpoints/putDocenteTurma";

app.get('/turmas', getTurmas)

app.post('/turmas', postCreateTurma)

app.put('/turmas/modulo', putModulo)

app.post('/estudante', postCreateEstudante)

app.get('/estudante', getEstudante)

app.put('/estudante/turma', putTurma)

app.post('/docente', postCreateDocente)

app.get('/docente', getDocente)

app.put('/docente/turma', putDocenteTurma)






