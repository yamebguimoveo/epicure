import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export class Authenticator {
  public static async protect(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;
      if (!authorization) throw "Token is missing";
      console.log(authorization);

      if (!authorization.startsWith("Bearer ")) {
        throw "Token is missing";
      }
      const token = authorization.split(" ")[1];
      if (!token) {
        throw "Token is missing";
      }
      jwt.verify(token, process.env.JWT_SECRET || "SECRET");
      next();
    } catch (error) {
      res.status(403).json({
        status: "fail",
        error,
      });
    }
  }
}
