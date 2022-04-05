/**
 * Required External Modules
 */

import { getAluno, CreateAluno, CreateCurso, updateAluno } from './crontroller'
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const readlinesync = require("readline-sync");
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

<<<<<<< HEAD
	let QuantidadeDeAluno = readlinesync.question("quantos alunos são?\n");

	for (let index = 1; index <= QuantidadeDeAluno; index++) {

		let nome = readlinesync.question(`nome do ${index} aluno?\n`);
		CreateAluno(nome)


		// let area= readlinesync.question(`nome do curso que está matriculado?\n`);
	}
	getAluno()

	let id = readlinesync.question("digite o id do aluno que voce quer alterar?\n");

	let nome = readlinesync.question("qual o novo nome do aluno?\n");
	updateAluno(id,nome)
	getAluno()
});
=======

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
});
>>>>>>> b9473de7159b8defdb0c72d8196bba7a05c91f4d
