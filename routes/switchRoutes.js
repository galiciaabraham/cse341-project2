const express = require('express');
const router = express.Router();
const switchController = require('../controller/switchController');
const errorHandler = require('../middleware/errorHandler');
const validator = require('../middleware/validator');

router.get('/', errorHandler.CatchErrors(switchController.getAll));
router.get(
  '/find/:gameId',
  validator.gameSearchValidator(),
  validator.validate,
  errorHandler.CatchErrors(switchController.getOne)
);

router.post(
  '/new-game',
  validator.gameValidator(),
  validator.validate,
  errorHandler.CatchErrors(switchController.addGame)
);

router.put(
  '/update-game/:gameId',
  validator.gameValidator(),
  validator.validate,
  errorHandler.CatchErrors(switchController.updateGame)
);

router.delete(
  '/delete-game/:gameId',
  validator.gameSearchValidator(),
  validator.validate,
  errorHandler.CatchErrors(switchController.deleteGame)
);

module.exports = router;
