const { body, param, validationResult } = require("express-validator");
 
const gameValidator = () => {
  return [
    body("Name", "Name of the game required").notEmpty(),
    body("Release", "Release year is required").notEmpty(),
    body("Director", "Name of main director required").notEmpty(),
    body("Composer", "Name of main Composer required").notEmpty(),
    body("Series", "Name of series required").notEmpty(),
    body("Developer", "Name of the developer company required").notEmpty(),
    body("Genre", "Name of main genre required").notEmpty(),
    body("Id", "An Id number is required").notEmpty().isNumeric()
  ];
};

const gameSearchValidator = () => {
  return [
    param('gameId', "Please enter a valid id").notEmpty().isLength(24)
  ];
};
 
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const errorList = [];
  errors.array().map((err) => errorList.push({ [err.param]: err.msg }));
  return res.status(422).json({
    errors: errorList,
  });
};
 
module.exports = { gameValidator, gameSearchValidator, validate };