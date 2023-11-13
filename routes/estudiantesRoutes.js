const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiante');

// Rutas para estudiantes
router.post('/', estudiantesController.createEstudiante);
router.get('/', estudiantesController.getAllEstudiantes);
router.get('/:id', estudiantesController.getEstudianteById);
router.put('/:id', estudiantesController.updateEstudiante);
router.delete('/:id', estudiantesController.deleteEstudiante);

module.exports = router;
