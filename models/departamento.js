// models/departamento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Departamento = sequelize.define('Departamento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Departamento;
