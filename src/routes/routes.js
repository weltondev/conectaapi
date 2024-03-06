const express = require('express');
const matriculaController = require('../controllers/matriculaController');

const routes = express.Router();

routes.get('/matriculas', matriculaController.listar);
routes.post('/matriculas', matriculaController.cadastrar);
routes.put('/matriculas/:id', matriculaController.atualizar);
routes.delete('/matriculas/:id', matriculaController.remover);

module.exports = routes