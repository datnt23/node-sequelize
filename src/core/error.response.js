"use strict";

const { ReasonPhrases, StatusCodes } = require("./httpStatusCode");

class ErrorResponse extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class ConflictResponse extends ErrorResponse {
  constructor(message = ReasonPhrases.CONFLICT, status = StatusCodes.CONFLICT) {
    super(message, status);
  }
}

module.exports = {
  ConflictResponse,
};
