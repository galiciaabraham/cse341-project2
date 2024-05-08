const mongodb = require('../model/dbConnection');

let switchController = {};


switchController.getAll = async (req, res) => {
    const data = await mongodb.getDb().db.collection('switch_games').find();
    data.toArray().then((games) =>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.send(games);
    });
};

module.exports = switchController;