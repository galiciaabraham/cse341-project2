const mongodb = require('../model/dbConnection');

let switchController = {};


switchController.getAll = async (req, res) => {
    const data = await mongodb.getDb().db().collection('switch_games').find();
    console.log(data);
    if(!data){
        throw Error;
    } else {
        data.toArray().then((games) =>{
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.send(games);
    }); 
    };
};

switchController.getOne = async (req, res) =>{
    const gameId = parseInt(req.params.gameId)
    const data = await mongodb.getDb().db().collection('switch_games').find({Id : gameId}).toArray();
    if (data.length < 1) {
        throw new Error('No data found for this id, please enter a valid id');
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.send(data)
    }
}

module.exports = switchController;