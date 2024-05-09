const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const route = require('./routes');
const bodyParser = require('body-parser');
const mongodb = require('./model/dbConnection');

app.use(bodyParser.json());
app.use('/', route);

app.use(async (err, req, res, next) => {
  res.send('Error while performing your request, please try again.');
  console.error(`Error at: "${req.originalUrl}": ${err.message}`)
  });

mongodb.initDb((error) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(port, () => {
      console.log(`Data base is connected and node app is listening on port: ${port}`);
    });
  }
});
