const createDepartamento = require('./create');
const deleteDepartamento = require('./delete');
const getAllDepartamentos = require('./getAll');
const getDepartamentoById = require('./getById');
const updateDepartamento = require('./update');

module.exports = {
    createDepartamento,
    deleteDepartamento,
    getAllDepartamentos,
    getDepartamentoById,
    updateDepartamento,
};