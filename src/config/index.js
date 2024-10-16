"use strict";

require("dotenv").config();

module.exports = {
  //  database
  dev: {
    username: process.env.DEV_DB_USER || "username",
    password: process.env.DEV_DB_PASS || "password",
    database: process.env.DEV_DB_NAME || "nodejs-sequelize-dev",
    host: process.env.DEV_DB_HOST || "localhost",
    port: process.env.DEV_DB_PORT || 5432,
  },
  pro: {
    username: process.env.PRO_DB_USER || "username",
    password: process.env.PRO_DB_PASS || "password",
    database: process.env.PRO_DB_NAME || "nodejs-sequelize-pro",
    host: process.env.PRO_DB_HOST || "localhost",
    port: process.env.PRO_DB_PORT || 5432,
  },
  dialectDB: process.env.DB_DIALECT || "postgres",
};
