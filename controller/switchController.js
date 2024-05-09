const mongodb = require('../model/dbConnection');
const objectId = require('mongodb').ObjectId;

let switchController = {};


switchController.getAll = async (req, res) => {
    const data = await mongodb.getDb().db().collection('switch_games').find();
    data.toArray().then((games) =>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.send(games);
    });
};

switchController.getOne = async (req, res) =>{
    const gameId = new objectId(req.params.gameId);
    const data = await mongodb.getDb().db().collection('switch_games').find({Id : gameId}).toArray().then((game) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.send(game)
    })
}

module.exports = switchController;