// associateModel.js
const Estudiante = require('./estudiante');
const Profesor = require('./profesor');
const Curso = require('./curso');
const Calificacion = require('./calificacion');
const Departamento = require('./departamento');
const Usuario = require('./usuario');


module.exports = {
    Estudiante,
    Profesor,
    Curso,
    Calificacion,
    Departamento,
    Usuario
};

Curso.belongsTo(Departamento, { foreignKey: 'departamento_id' });
Departamento.hasMany(Curso, { foreignKey: 'departamento_id' });