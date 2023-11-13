const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursos');

// Rutas para cursos
router.post('/', cursosController.createCurso);
router.get('/', cursosController.getAllCursos);
router.get('/:id', cursosController.getCursoById);
router.put('/:id', cursosController.updateCurso);
router.delete('/:id', cursosController.deleteCurso);


module.exports = router;
