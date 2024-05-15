import { Response } from "express";
import jwt from "jsonwebtoken";
const JWT_SECRET = "2Cvle7xrsmsQrjFT";
const generateToken = (res: Response, userId: string) => {
  const token = jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 86400000,
  });
};

export default generateToken;
