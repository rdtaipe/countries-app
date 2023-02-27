const { Router } = require('express');
const {GetAllActivities,CreateActivities} =require('../controllers/activities.js')

const router= Router();

router.post('/',CreateActivities);
router.get('/',GetAllActivities);


module.exports = router;
