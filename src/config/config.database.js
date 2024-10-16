"use strict";

const { dev, dialectDB, pro } = require("./index");

module.exports = {
  development: {
    username: dev.username || "username",
    password: dev.password,
    database: dev.database,
    host: dev.host,
    port: dev.port,
    dialect: dialectDB,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: dialectDB,
  },
  production: {
    username: pro.username,
    password: pro.password,
    database: pro.database,
    host: pro.host,
    port: pro.port,
    dialect: dialectDB,
  },
};
