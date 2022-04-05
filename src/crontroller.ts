import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient()

export async function CreateAluno (data:string){
    const alunos = await prisma.aluno.create({
		data: {
		nome: data
		}
	  })
}

export async function getAluno(){
    const alunos = await prisma.aluno.findMany()
    console.log(alunos)

}

export async function updateAluno(id:string,data:string){
    const aluno = await prisma.aluno.update({
        where: {id:id},
        data: {nome:data},
    })
}

export async function CreateCurso (nome:string , area:string){
    const cursos = await prisma.curso.create({
		data: {
        area,
		nome,
		}
	  })
}