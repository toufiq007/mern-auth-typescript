import { Request, Response } from "express";

// public route
const userRegistration = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "user registration successfull",
    });
  } catch (err) {
    console.log(err);
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
