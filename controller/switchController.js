const mongodb = require('../model/dbConnection');
const objectId = require('mongodb').ObjectId;

let switchController = {};

switchController.getAll = async (req, res) => {
  let data = await mongodb.getDb().db().collection('switch_games').find().toArray();
  if (data.length < 1) {
    res.send('No data found for this collection, please try again or contact an administrator');
    throw new Error('No data found in this collection, please try again later');
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(data);
  }
};

switchController.getOne = async (req, res) => {
  const gameId = new objectId(req.params.gameId);
  const data = await mongodb
    .getDb()
    .db()
    .collection('switch_games')
    .find({ _id: gameId })
    .toArray();
  if (data.length < 1) {
    res.send('No data found for this id, please try again or contact an administrator');
    throw new Error('No data found for this id, please enter a valid id');
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(data);
  }
};

switchController.addGame = async (req, res) => {
  const game = {
    Name: req.body.Name,
    Release: req.body.Release,
    Director: req.body.Director,
    Composer: req.body.Composer,
    Series: req.body.Series,
    Developer: req.body.Developer,
    Genre: req.body.Genre,
    Id: req.body.Id
  };

  try {
    const response = await mongodb.getDb().db().collection('switch_games').insertOne({ game });
    if (response.acknowledged) {
      res.setHeader('Content-Type', 'application/json');
      res.status(204);
      res.send(`Created game _id: "${response.insertedId}" in MongoDB`);
    }
  } catch (error) {
    res
      .status(500)
      .send(
        'Something went wrong while uploading your game, please try again or contact an administrator.'
      );
  }
};

switchController.updateGame = async (req, res) => {
  const gameId = new objectId(req.params.gameId);
  const game = {
    Name: req.body.Name,
    Release: req.body.Release,
    Director: req.body.Director,
    Composer: req.body.Composer,
    Series: req.body.Series,
    Developer: req.body.Developer,
    Genre: req.body.Genre,
    Id: req.body.Id
  };

  try {
    const response = await mongodb
      .getDb()
      .db()
      .collection('switch_games')
      .replaceOne({ _id: gameId }, game);
    if (response.modifiedCount > 0) {
      res.status(204).send('Game correctly updated');
    }
  } catch (error) {
    res
      .status(500)
      .send(
        'Something went wrong while updating your game, please try again or contact an administrator.'
      );
  }
};

switchController.deleteGame = async (req, res) => {
  const gameId = new objectId(req.params.gameId);
  try {
    const response = await mongodb
      .getDb()
      .db()
      .collection('switch_games')
      .deleteOne({ _id: gameId });
    if (response.deletedCount > 0) {
      res.status(204).send(`Game _id ${gameId} has been deleted`);
    }
  } catch (error) {
    res
      .status(500)
      .send(`Game _id ${gameId} could not be deleted, try again or contact an administrator`);
  }
};

module.exports = switchController;
