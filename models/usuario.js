const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class Usuario extends Model { }

Usuario.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Para asegurarse de que los correos electrónicos sean únicos
        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rol: {
            type: DataTypes.ENUM('estudiante', 'profesor'),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Usuario',
    }
);

module.exports = Usuario;
