const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true

    },
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
        // defuald
        defaultValue: 1,
        
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    season: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['summer', 'autumn', 'winter', 'spring']],
        },
    },
    country:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    

},{timestamps:false});
};

// ID. *
// Nombre. *
// Dificultad (número del 1 al 5). *
// Duración (en horas).
// Temporada (Verano, Otoño, Invierno o Primavera). *