"use strict";

const { ReasonPhrases, StatusCodes } = require("./httpStatusCode");

class SuccessResponse {
  constructor({
    message,
    status = StatusCodes.OK,
    reasonStatus = ReasonPhrases.OK,
    data = {},
  }) {
    this.message = !message ? reasonStatus : message;
    this.status = status;
    this.data = data;
  }

  send(res, headers = {}) {
    return res.status(this.status).json(this);
  }
}

class CreatedResponse extends SuccessResponse {
  constructor({
    message,
    status = StatusCodes.CREATED,
    reasonStatus = ReasonPhrases.CREATED,
    data,
    options = {},
  }) {
    super({ message, status, reasonStatus, data });
    this.options = options;
  }
}

module.exports = {
  SuccessResponse,
  CreatedResponse,
};
