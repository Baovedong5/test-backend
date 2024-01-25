import { NextFunction, Request, Response } from "express";
import { omit } from "lodash";

const defaultErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Object.getOwnPropertyNames(err).forEach((key) => {
    Object.defineProperty(err, key, { enumerable: true });
  });

  res.status(500).json({
    message: "Có lỗi xảy ra",
    errorInfo: omit(err, ["stack"]),
  });
};

export default defaultErrorHandler;
