import { Response } from "express";
import jwt from "jsonwebtoken";

const generateToken = (res: Response, userId: string) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });
  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 86400000,
  });
  return token;
};

export default generateToken;
