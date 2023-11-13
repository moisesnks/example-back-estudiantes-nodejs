// Rutas para departamentos
const express = require('express');
const router = express.Router();
const departamentosController = require('../controllers/departamento');

// Rutas para departamentos
router.post('/', departamentosController.createDepartamento);
router.get('/', departamentosController.getAllDepartamentos);
router.get('/:id', departamentosController.getDepartamentoById);
router.put('/:id', departamentosController.updateDepartamento);
router.get('/:id/cursos', departamentosController.getCursosById);






module.exports = router;