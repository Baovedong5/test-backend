import express from "express";
import { UploadFileController } from "~/controllers/product.controllers";
import catchAsync from "~/utils/catchAsync";

const fileRouter = express.Router();

fileRouter.post("/", catchAsync(UploadFileController))


export default fileRouter;
