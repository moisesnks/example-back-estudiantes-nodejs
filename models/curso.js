const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class Curso extends Model { }

Curso.init(
    {
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        profesor_id: DataTypes.INTEGER,
        horario: DataTypes.STRING,
        departamento_id: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: 'Curso',
    }
);


module.exports = Curso;
