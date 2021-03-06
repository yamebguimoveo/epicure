import { User } from "../../../db/models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { isGeneratorFunction } from "util/types";
import { APIFeatures } from "../utils/ApiFeatures";

//function that get user and generate jwt for it
const signToken = (user: any) => {
  return jwt.sign(
    { name: user.name, email: user.email },
    process.env.JWT_SECRET || "secret",
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "10m",
    }
  );
};

export class UserHandler {
  async signup(user: any) {
    try {
      const { email, name, _id } = await User.create(user);
      return { email, name, _id };
    } catch (err) {
      throw err;
    }
  }

  async login(user: { email: string; password: string }) {
    try {
      const existUser = await User.findOne({ email: user.email }).select(
        "+password"
      );
      if (!existUser || !existUser.password) {
        throw "Could not find user";
      }
      const isCorrectPassword = await bcrypt.compare(
        user.password,
        existUser.password
      );
      console.log(isCorrectPassword);

      if (!isCorrectPassword) throw "Incorrect Password";
      const token = signToken(existUser);
      return token;
    } catch (err) {
      return err;
    }
  }

  async getUsers(reqQuery: any) {
    try {
      let query = User.find();
      const features = new APIFeatures(query, reqQuery)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const users = await query;
      return users;
    } catch (err) {
      throw err;
    }
  }

  async checkIfUserExists(email: string) {
    try {
      const user = await User.find({ email });
      if (user.length === 0) return false;
      return user[0];
    } catch (err) {
      throw err;
    }
  }
}
