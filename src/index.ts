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