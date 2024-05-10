const express = require('express');
const router = express.Router();
const playController = require('../controller/playController');
const errorHandler = require('../middleware/errorHandler');
const validator = require('../middleware/validator');

router.get('/', errorHandler.CatchErrors(playController.getAll));
router.get(
  '/find/:gameId',
  validator.gameSearchValidator(),
  validator.validate,
  errorHandler.CatchErrors(playController.getOne)
);

router.post(
  '/new-game',
  validator.gameValidator(),
  validator.validate,
  errorHandler.CatchErrors(playController.addGame)
);

router.put(
  '/update-game/:gameId',
  validator.gameValidator(),
  validator.validate,
  errorHandler.CatchErrors(playController.updateGame)
);

router.delete(
  '/delete-game/:gameId',
  validator.gameSearchValidator(),
  validator.validate,
  errorHandler.CatchErrors(playController.deleteGame)
);

module.exports = router;
