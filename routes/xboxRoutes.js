const express = require('express');
const router = express.Router();
const xboxController = require('../controller/xboxController');
const errorHandler = require('../middleware/errorHandler');
const validator = require('../middleware/validator');

router.get('/', errorHandler.CatchErrors(xboxController.getAll));
router.get(
  '/find/:gameId',
  validator.gameSearchValidator(),
  validator.validate,
  errorHandler.CatchErrors(xboxController.getOne)
);

router.post(
  '/new-game',
  validator.gameValidator(),
  validator.validate,
  errorHandler.CatchErrors(xboxController.addGame)
);

router.put(
  '/update-game/:gameId',
  validator.gameValidator(),
  validator.validate,
  errorHandler.CatchErrors(xboxController.updateGame)
);

router.delete(
  '/delete-game/:gameId',
  validator.gameSearchValidator(),
  validator.validate,
  errorHandler.CatchErrors(xboxController.deleteGame)
);

module.exports = router;
