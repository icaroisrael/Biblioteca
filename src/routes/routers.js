const connection = require('../database/connection')
const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/AlunoController')

router.post('/aluno',AlunoController.novoAluno)
router.get('/aluno', AlunoController.pesquisarAluno)
//router.get('/aluno', AlunoController.pesquisarAll)


module.exports = router

