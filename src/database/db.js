"use strict";

require("dotenv").config();
const { Sequelize } = require("sequelize");
const configDatabase = require("../config/config.database");
const env = process.env.NODE_ENV || "development";

const { database, username, password, host, port, dialect } =
  configDatabase[env];

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: dialect,
  pool: {
    max: 6,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const connectionDB = async () => {
  //  Connecting to a database postgres
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { connectionDB, sequelize };
