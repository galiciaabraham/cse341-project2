const express = require('express');
const router = express.Router();
const switchController = require('../controller/switchController');
const errorHandler = require('../middleware/errorHandler');

router.get('/', errorHandler.CatchErrors(switchController.getAll));
router.get('/find/:gameId', errorHandler.CatchErrors( switchController.getOne));

router.post('/new-game', errorHandler.CatchErrors(switchController.addGame));

router.put('/update-game/:gameId', errorHandler.CatchErrors(switchController.updateGame));
router.delete('/delete-game/:gameId', errorHandler.CatchErrors(switchController.deleteGame));



module.exports = router;