// associateModel.js
const Estudiante = require('./estudiante');
const Profesor = require('./profesor');
const Curso = require('./curso');
const Calificacion = require('./calificacion');
const Departamento = require('./departamento');


module.exports = {
    Estudiante,
    Profesor,
    Curso,
    Calificacion,
    Departamento
};

Curso.belongsTo(Departamento, { foreignKey: 'departamento_id' });
Departamento.hasMany(Curso, { foreignKey: 'departamento_id' });