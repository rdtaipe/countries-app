const { Router } = require('express');
const { getAllCountries,getCountryById,getCountryByKey} = require('../controllers/countries')

const router= Router();

router.get('/',getAllCountries)

router.get('/:idPais',getCountryById)

router.get('/filter/:key',getCountryByKey)

// Configurar los routers
// 📍 GET | /countries/:idPais
// Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// El país es recibido por parámetro (ID de tres letras del país).
// Tiene que incluir los datos de las actividades turísticas asociadas a este país.
// 📍 GET | /countries/name?="..."
// Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el país, debe mostrar un mensaje adecuado.


module.exports = router;