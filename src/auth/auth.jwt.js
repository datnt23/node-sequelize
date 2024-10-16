"use strict";

const JWT = require("jsonwebtoken");

const generateTokens = async (payload, publicKey, privateKey) => {
  try {
    const accessToken = await JWT.sign(payload, publicKey, {
      expiresIn: "2 days",
    });
    const refreshToken = await JWT.sign(payload, privateKey, {
      expiresIn: "7 days",
    });

    JWT.verify(accessToken, publicKey, (err, decode) => {
      if (err) {
        console.error(`Error verify::`, err);
      } else {
        console.log(`Decode verify::`, decode);
      }
    });

    return { accessToken, refreshToken };
  } catch (error) {}
};

module.exports = { generateTokens };
