const { Router } = require('express');

const router = Router();
// Importar todos los routers;
const countriesRouter = require('./countries.js');
const placesRouter = require('./details.js');
const activitiesRouter = require('./activities.js');


router.use('/countries', countriesRouter);
router.use('/activities', activitiesRouter)
router.use('/details', placesRouter)


module.exports = router;
