const createEstudiante = require('./create');
const deleteEstudiante = require('./delete');
const getAllEstudiantes = require('./getAll');
const getEstudianteById = require('./getById');
const updateEstudiante = require('./update');
const getCalificacionesById = require('./getCalificacionesById');
const getCalificacionesById_IdCurso = require('./getCalificacionesById_IdCurso');

module.exports = {
    createEstudiante,
    deleteEstudiante,
    getAllEstudiantes,
    getEstudianteById,
    updateEstudiante,
    getCalificacionesById,
    getCalificacionesById_IdCurso,
};
