"use strict";
const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
module.exports = sequelize.define(
  "users",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roles: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    paranoid: true,
    modelName: "users",
    timestamps: true,
    deletedAt: true,
  }
);
