const express = require('express');
const router = express.Router();
const calificacionesController = require('../controllers/calificacion');

// Rutas para calificaciones
router.post('/', calificacionesController.createCalificacion);
router.get('/', calificacionesController.getAllCalificaciones);
router.get('/:id', calificacionesController.getCalificacionById);
router.put('/:id', calificacionesController.updateCalificacion);
router.delete('/:id', calificacionesController.deleteCalificacion);



module.exports = router;
