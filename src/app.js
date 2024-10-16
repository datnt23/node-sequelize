const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const { connectionDB } = require("./database/db");
const app = express();

// init middleware
// app.use(morgan("combined")); //  use for production
app.use(morgan("dev")); // use for development
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init database
connectionDB();

// init routes
app.use("/api", require("./routes"));

// handling error
app.use((req, res, next) => {
  const error = new Error("Not found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    code: statusCode,
    status: "error",
    message: error.message || "Internal server error!",
  });
});

module.exports = app;
