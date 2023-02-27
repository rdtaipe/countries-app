const { Router } = require('express');
const { getAllCountries,getCountryById,getCountryByKey} = require('../controllers/countries')

const router= Router();

router.get('/',getAllCountries)
router.get('/:idPais',getCountryById)
router.get('/filter/:key',getCountryByKey)

module.exports = router;