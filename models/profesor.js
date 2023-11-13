const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class Profesor extends Model { }

Profesor.init(
    {
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
        departamento_id: DataTypes.INTEGER,
        email: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'Profesor',
    }
);

const Curso = require('./curso');
const Departamento = require('./departamento');

Profesor.hasMany(Curso, { foreignKey: 'profesor_id', onDelete: 'CASCADE' });
Profesor.belongsTo(Departamento, { foreignKey: 'departamento_id' });

module.exports = Profesor;
