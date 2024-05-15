import { Request, Response } from "express";
import UserModel, { IUser } from "../models/user.models";
import generateToken from "../utils/generateToken";

// public route
const userRegistration = async (req: Request, res: Response) => {
  try {
    const userData: IUser = req.body;
    const user = await UserModel.findOne({ email: userData.email });
    if (user) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    const newUser = await UserModel.create({
      email: userData.email,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
    });
    if (newUser) {
      generateToken(res, newUser._id);
      res.status(200).json({ message: "user created successfull", newUser });
    } else {
      res.status(400).json({ message: "invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "invalid credentials" });
  }
};

// public route
const userLogin = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "user login successfull",
    });
  } catch (err) {
    console.log(err);
  }
};

// public route
const userLogout = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "user logout successfull",
    });
  } catch (err) {
    console.log(err);
  }
};

// get user profile
const getUserProfile = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "welcom to user",
    });
  } catch (err) {
    console.log(err);
  }
};

// update user profile
const updateUserProfile = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "welcom to user",
    });
  } catch (err) {
    console.log(err);
  }
};

export const userController = {
  userRegistration,
  userLogin,
  userLogout,
  getUserProfile,
  updateUserProfile,
};
