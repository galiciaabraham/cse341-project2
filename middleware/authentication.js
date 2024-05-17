const authentication = {};

authentication.checkAuth = (req, res, next) => {
    if(req.session.user === undefined){
        return res.status(401).json('You are not authenticated');
    }
    next();
}

module.exports = authentication;