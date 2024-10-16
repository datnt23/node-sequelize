"use strict";

const User = require("../models/user");
const bcrypt = require("bcrypt");
const crypto = require("node:crypto");
const { EMPLOYEE, SALES, ADMIN } = require("../auth/constantRoles");
const { ConflictResponse } = require("../core/error.response");
const { generateTokens } = require("../auth/auth.jwt");

class AuthService {
  static signUp = async ({
    email,
    password,
    firstName,
    middleName,
    lastName,
  }) => {
    //  check email is exists
    const foundUser = await User.findOne({ where: { email: email } });
    if (foundUser) {
      throw new ConflictResponse("Error: User already exists!");
    }
    //  handle get full name
    var getFullName = "";
    if (middleName) {
      getFullName = firstName.concat(" ", middleName, " ", lastName);
    } else {
      getFullName = firstName.concat(" ", lastName);
    }
    //  hash password
    const hashPassword = await bcrypt.hash(password, 10);
    //  create new user
    const newUser = await User.create({
      email: email,
      password: hashPassword,
      roles: [SALES, ADMIN],
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      fullName: getFullName,
    });

    if (newUser) {
      const publicKey = crypto.randomBytes(64).toString("hex");
      const privateKey = crypto.randomBytes(64).toString("hex");

      const tokens = await generateTokens(
        {
          userId: newUser.id,
          email,
          name: newUser.fullName,
        },
        publicKey,
        privateKey
      );

      return {
        user: {
          id: newUser.id,
          email: newUser.email,
          first_name: newUser.firstName,
          middle_name: newUser.middleName,
          last_name: newUser.lastName,
          full_name: newUser.fullName,
          roles: newUser.roles,
          created_at: newUser.createdAt,
          updated_at: newUser.updatedAt,
          deleted_at: newUser.deletedAt,
        },
        tokens,
      };
    }

    return {
      code: 200,
      metadata: null,
    };
  };

  static deleteUser = async ({ id }) => {
    await User.destroy({ where: { id: id } });
  };

  static restoreDeleteUser = async ({ id }) => {
    await User.restore({ where: { id: id } });
  };
}

module.exports = AuthService;
