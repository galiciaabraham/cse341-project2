const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const route = require('./routes');
const bodyParser = require('body-parser');
const mongodb = require('./model/dbConnection');

app.use(bodyParser.json());
app.use('/', route);

mongodb.initDb((error) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(port, () => {
      console.log(`Data base is connected and node app is listening on port: ${port}`);
    });
  }
});
