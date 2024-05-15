import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.models";

// Augment the Request type to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token;
    token = req.cookies.auth_token;
    if (!token) {
      res.status(400).json({
        message: "not authorized,no valid token",
      });
    }
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = await UserModel.findById(verifiedToken?.id);
    next();
  } catch (err) {}
};
