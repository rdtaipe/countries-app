const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    },
    duration: {
        type: DataTypes.STRING,
    },
    season: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['Verano', 'Otoño', 'Invierno', 'Primavera']],
        },
    },

},{timestamps:false});
};

// ID. *
// Nombre. *
// Dificultad (número del 1 al 5). *
// Duración (en horas).
// Temporada (Verano, Otoño, Invierno o Primavera). *