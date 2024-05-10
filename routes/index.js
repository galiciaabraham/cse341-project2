const express = require('express');
const router = express.Router();
const switchRoutes = require('./switchRoutes');
const playRoutes = require('./playRoutes');
const xboxRoutes = require('./xboxRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.use('/', swaggerUi.serve); 
router.get('/', swaggerUi.setup(swaggerDocument));

router.use('/switch', switchRoutes);
router.use('/playstation', playRoutes);
router.use('/xbox', xboxRoutes);


module.exports = router;
