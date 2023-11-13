
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Estudiante = sequelize.define('Estudiante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE
});

module.exports = Estudiante;
