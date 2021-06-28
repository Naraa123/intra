const errorHandler = (err, req, res, next) => {
  const error = { ...err };

  error.message = err.message;

  if (error.name) {
    error.message = "Wrond ID";
    error.statusCode = 400;
  }

  res.status(500).json({
    success: false,
    error,
  });
};
module.exports = errorHandler;
