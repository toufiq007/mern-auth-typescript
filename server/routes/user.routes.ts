import express from "express";
import { userController } from "../controllers/user.controller";

const router = express.Router();

router.post("/auth", userController.userRegistration);
router.post("/login", userController.userLogin);
router.post("/logout", userController.userLogout);
router
  .get("/profile")
  .get("/profile", userController.getUserProfile)
  .put("/updateProfile", userController.updateUserProfile);

export default router;
