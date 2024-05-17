const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const gitHubStrategy = require('passport-github2').Strategy;
const port = process.env.PORT || 8080;
const route = require('./routes');
const bodyParser = require('body-parser');
const mongodb = require('./model/dbConnection');


app.use(bodyParser.json());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new gitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL
},
function(accessToken, refreshToken, profile, done) {
  //User.findOrCreate({ githubId: profile.id }, function (err, user) {
    return done(null, profile);
  //});
}
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/', (req,res) => { res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.username} ` : 'Logged out')});

app.get('/github/callback', passport.authenticate('github', {
  failureRedirect: '/api-docs', session: false}),
  (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
  });

  app.use('/', route);

app.use(async (err, req, res, next) => {
  console.error(`Error at: "${req.originalUrl}": ${err.message}`);
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
