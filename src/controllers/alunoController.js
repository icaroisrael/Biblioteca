const database = require('../database/connection')
class AlunoController{
    novoAluno(req, res){
        const {matricula, nome, sexo } = req.body
        console.log(matricula, nome, sexo)

        const Aluno = { matricula: matricula, nome: nome, sexo: sexo}

        database.query('INSERT INTO ALUNO SET ?', Aluno, (err, res)=>{
            if(err) throw err
            res.json({menssage: "Aluno Cadastrado com sucesso"})
        } )       
    }

   
}



module.exports = new AlunoController()