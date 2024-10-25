// models/Usuario.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/config');

// Definición del modelo "Usuario"
const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false, // No permite valores nulos
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Cada email debe ser único
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false, // No permite valores nulos
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false, // No permite valores nulos
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false, // No permite valores nulos
    },
    estado:{
        type: DataTypes.STRING,
        allowNull: false, // No permite valores nulos
    },
    google:{
        type: DataTypes.STRING,
        allowNull: false, // No permite valores nulos
    },
}, {
    tableName: 'usuarios', // Nombre de la tabla en la base de datos
    timestamps: false, // Agrega columnas createdAt y updatedAt automáticamente
});

module.exports = Usuario;
