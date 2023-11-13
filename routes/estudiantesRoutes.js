// Rutas para estudiantes
const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiante');

// Rutas para estudiantes
router.post('/', estudiantesController.createEstudiante);
router.get('/', estudiantesController.getAllEstudiantes);
router.get('/:id', estudiantesController.getEstudianteById);
router.put('/:id', estudiantesController.updateEstudiante);
router.delete('/:id', estudiantesController.deleteEstudiante);
router.get('/:id/calificaciones', estudiantesController.getCalificacionesById);
router.get('/:id/calificaciones/:idCurso', estudiantesController.getCalificacionesById_IdCurso);

module.exports = router;

