const express = require('express');
const router = express.Router();
const switchController = require('../controller/switchController');
const errorHandler = require('../middleware/errorHandler');

router.get('/',errorHandler.CatchErrors( switchController.getAll));
router.get('/:gameId', errorHandler.CatchErrors( switchController.getOne));



module.exports = router;