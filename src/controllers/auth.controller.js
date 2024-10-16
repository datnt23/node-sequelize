"use strict";
const {
  SuccessResponse,
  CreatedResponse,
} = require("../core/success.response");
const AuthService = require("../services/auth.service");

class AuthController {
  signUp = async (req, res, next) => {
    new CreatedResponse({
      message: "Sign up success!",
      data: await AuthService.signUp(req.body),
    }).send(res);
  };
  deleteUser = async (req, res, next) => {
    new SuccessResponse({
      message: "Delete success!",
      data: await AuthService.deleteUser(req.body),
    }).send(res);
  };
  restoreDeleteUser = async (req, res, next) => {
    new SuccessResponse({
      message: "Restore User success!",
      data: await AuthService.restoreDeleteUser(req.body),
    }).send(res);
  };
}

module.exports = new AuthController();
