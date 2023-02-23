const { Router } = require('express');

const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require('./countries.js');
const placesRouter = require('./places.js');
const activitiesRouter = require('./activities.js');


router.use('/countries', countriesRouter);
router.use('/activities', activitiesRouter)
router.use('/places', placesRouter)



module.exports = router;
