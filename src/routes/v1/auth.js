"use strict";
const express = require("express");
const asyncHandler = require("../../helpers/asyncHandler");
const AuthController = require("../../controllers/auth.controller");
const router = express.Router();

router.get("/sign-up", asyncHandler(AuthController.signUp));
router.delete("/", asyncHandler(AuthController.deleteUser));
router.post("/restore", asyncHandler(AuthController.restoreDeleteUser));

module.exports = router;
