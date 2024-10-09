const express = require("express");
const router = express.Router();

router.get("/sign-up", (req, res, next) => {
  return res.status(200).json({
    status: 200,
    message: "Sign up success!",
  });
});

module.exports = router;
