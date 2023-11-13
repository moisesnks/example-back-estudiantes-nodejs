// Rutas para profesores
const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesor');

// Rutas para profesores
router.post('/', profesoresController.createProfesor);
router.get('/', profesoresController.getAllProfesores);
router.get('/:id', profesoresController.getProfesorById);
router.put('/:id', profesoresController.updateProfesor);
router.delete('/:id', profesoresController.deleteProfesor);
router.get('/:id/cursos', profesoresController.getCursosById);



module.exports = router;