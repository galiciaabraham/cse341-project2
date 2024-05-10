const express = require('express');
const router = express.Router();
const switchRoutes = require('./switchRoutes');
const playRoutes = require('./playRoutes');
const xboxRoutes = require('./xboxRoutes');

router.use('/switch', switchRoutes);
router.use('/playstation', playRoutes);
router.use('/xbox', xboxRoutes);


module.exports = router;
