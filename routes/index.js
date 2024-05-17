const express = require('express');
const router = express.Router();
const switchRoutes = require('./switchRoutes');
const playRoutes = require('./playRoutes');
const xboxRoutes = require('./xboxRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const passport = require('passport');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.use('/switch', switchRoutes);
router.use('/playstation', playRoutes);
router.use('/xbox', xboxRoutes);

router.get('/login', passport.authenticate('github'), (req, res) =>{});

router.get('/logout', function(req, res, next){
    req.logout(function(error){
        if(error) { return next(error);}
        res.redirect('/');
    });
});

module.exports = router;
