const createProfesor = require('./create');
const deleteProfesor = require('./delete');
const getAllProfesores = require('./getAll');
const getProfesorById = require('./getById');
const updateProfesor = require('./update');
const getCursosById = require('./getCursosById');

module.exports = {
    createProfesor,
    deleteProfesor,
    getAllProfesores,
    getProfesorById,
    updateProfesor,
    getCursosById,
};