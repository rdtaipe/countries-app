const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    iso:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.INTEGER,
    },
    population:{
      type: DataTypes.INTEGER,
    },
    lng:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    lat:{
      type:DataTypes.INTEGER,
      allowNull:false

    },
    

  },{timestamps:false});
};
