const ErrorMiddleware = {};

ErrorMiddleware.CatchErrors = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = ErrorMiddleware;
