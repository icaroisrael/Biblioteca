const connection = require('../database/connection')
const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/AlunoController')

router.post('/aluno',AlunoController.novoAluno)


module.exports = router

