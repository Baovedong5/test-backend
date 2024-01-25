import express from "express";
import {
  loginController,
  registerController,
} from "~/controllers/auth.controllers";
import catchAsync from "~/utils/catchAsync";

const authRouter = express.Router();

authRouter.post("/register", catchAsync(registerController));

authRouter.post("/login", catchAsync(loginController));

export default authRouter;
