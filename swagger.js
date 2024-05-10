const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Project 2 API - 8th generation videogames ',
    description: 'This is an API that allows you to pull some information of games from the Nintentdo Switch, Playstation 4 and Xbox One consoles'
  },
  host: 'localhost:8080'
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);