CREATE TABLE labenu_turma (
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255),
modulo VARCHAR(255) DEFAULT "0"
);
CREATE TABLE labenu_docente (
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255),
email VARCHAR(255) NOT NULL UNIQUE,
data_nasc DATE NOT NULL,
turma_id VARCHAR(255) NOT NULL,
FOREIGN KEY (turma_id) REFERENCES labenu_turma(id)
);

CREATE TABLE labenu_especialidades ( 
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL UNIQUE 
);

CREATE TABLE labenu_docente_especialidade (
id VARCHAR(255) PRIMARY KEY,
docente_id VARCHAR(255) NOT NULL,
especialidae_id VARCHAR(255) NOT NULL,
FOREIGN KEY (docente_id) REFERENCES labenu_docente(id),
FOREIGN KEY (especialidae_id) REFERENCES labenu_especialidades(id)
);

CREATE TABLE labenu_estudante ( 
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
data_nasc DATE NOT NULL,
turma_id VARCHAR(255) NOT NULL,
FOREIGN KEY (turma_id) REFERENCES labenu_turma(id)
);

CREATE TABLE labenu_hobby (
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE labenu_estudante_hobby (
id VARCHAR(255) PRIMARY KEY,
estudante_id VARCHAR(255) NOT NULL,
hobby_id VARCHAR(255) NOT NULL,
FOREIGN KEY (estudante_id) REFERENCES labenu_estudante(id),
FOREIGN KEY (hobby_id) REFERENCES labenu_hobby(id)
)