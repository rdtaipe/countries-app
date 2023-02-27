require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {DB_USER, DB_PASSWORD, DB_HOST,} = process.env;


const sequelize = new Sequelize(
    'countries',//Nombre de la base de datos
    DB_USER,//Nombre de usuario
    DB_PASSWORD,//Contraseña
    {
    dialect: 'postgres',// Especifica que se está utilizando PostgreSQL como el dialecto 
    host: DB_HOST,//Especifica que la base de datos se encuentra en el servidor local
    port: 5432,//Especifica el puerto en el que se encuentra corriendo la base de datos
    logging: false, //  Especifica si se deben mostrar los comandos SQL en la consola.
    native: false, // Especifica si se deben usar las funciones nativas de PostgreSQL para mejorar el rendimiento
    storage: 'database.sqlite'
},

)
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Country.belongsToMany(Activity, { through: "country_activity" });
Activity.belongsToMany(Country, { through: "country_activity" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  db: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
