const express = require('express');
const router = express.Router();
const playController = require('../controller/playController');
const errorHandler = require('../middleware/errorHandler');
const validator = require('../middleware/validator');
const authenticator = require('../middleware/authentication');

router.get('/', errorHandler.CatchErrors(playController.getAll));
router.get(
  '/find/:gameId',
  validator.gameSearchValidator(),
  validator.validate,
  errorHandler.CatchErrors(playController.getOne)
);

router.post(
  '/new-game',
  authenticator.checkAuth,
  validator.gameValidator(),
  validator.validate,
  errorHandler.CatchErrors(playController.addGame)
);

router.put(
  '/update-game/:gameId',
  authenticator.checkAuth,
  validator.gameValidator(),
  validator.validate,
  errorHandler.CatchErrors(playController.updateGame)
);

router.delete(
  '/delete-game/:gameId',
  authenticator.checkAuth,
  validator.gameSearchValidator(),
  validator.validate,
  errorHandler.CatchErrors(playController.deleteGame)
);

module.exports = router;
