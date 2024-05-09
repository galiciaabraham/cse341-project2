const express = require('express');
const router = express.Router();
const switchRoutes = require('./switchRoutes');

router.use('/switch' , switchRoutes );

module.exports = router;