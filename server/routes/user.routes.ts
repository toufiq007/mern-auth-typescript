import express from "express";
import { userController } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/verifyToken";

const router = express.Router();

router.post("/auth", userController.userRegistration);
router.post("/login", userController.userLogin);
router.post("/logout", userController.userLogout);
router
  .route("/profile")
  .get(verifyToken, userController.getUserProfile)
  .put(verifyToken, userController.updateUserProfile);
export default router;
