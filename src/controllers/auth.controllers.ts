import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import authService from "~/services/auth.services";
import { LoginReqBody, RegisterReqBody } from "~/types/auth";

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response
) => {
  const result = await authService.register(req.body);

  return res.status(200).json({
    message: "Register success",
    data: result,
  });
};

export const loginController = async (
  req: Request<ParamsDictionary, any, LoginReqBody>,
  res: Response
) => {
  const result = await authService.login(req.body);

  return res.status(200).json({
    message: "Login success",
    data: result,
  });
};
