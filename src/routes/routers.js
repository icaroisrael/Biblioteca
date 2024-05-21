const connection = require('../database/connection')
const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController')

router.post('/aluno',alunoController.novoAluno)
router.get('/aluno', alunoController.listarAluno)
//router.get('/aluno/:matricula', alunoController.listarUmAluno)
//router.put('/aluno/:matricula', alunoController.atualizarAluno)

module.exports = router;

