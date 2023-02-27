const { Router } = require('express');
const {GetCountryDetail} = require('../controllers/details.js')

const router= Router();

router.get('/:name',GetCountryDetail );

module.exports = router;

