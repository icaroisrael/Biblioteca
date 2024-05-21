const database = require('../database/connection')
class AlunoController{
    novoAluno(request, response){
        const {MATRICULA, NOME, SEXO } = request.body
        console.log(MATRICULA, NOME, SEXO)
        database.insert({MATRICULA, NOME, SEXO}).table("ALUNO").then(data=>{
            console.log(data)
            response.json({message: "Aluno cadastrado com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarAluno(request, response){
        database.select("*").table("ALUNO").then(alunos=>{
            console.log(alunos)
            response.json(alunos)
        }).catch(error=>{
            console.log(error)
        })
    }

    /*listarUmAluno(request, response){
        const matricula = request.params

        database.select("*").table("ALUNO").where({MATRICULA:matricula}).then(alunos=>{
            console.log(alunos)
            response.json(alunos)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarAluno(request, response){
        const matricula = request.params

        const {nome} = request.body
        database.where({MATRICULA:matricula}).update({NOME:nome}).table("ALUNO").then(alunos=>{
           response.json({menssage:"Aluno atualizado com sucesso"})
        }).catch(error=>{
            response.json(error)
        })         
    }*/
}



module.exports = new AlunoController()