const express = require('express');
const router = express.Router();
const switchController = require('../controller/switchController');

router.get('/', switchController.getAll);
router.get('/:gameId', switchController.getOne);



module.exports = router;