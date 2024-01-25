import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import productService from "~/services/product.services";

import {
  CreateReqBody,
  DeleteReqBody,
  Pagination,
  UpdateReqBody,
} from "~/types/auth";

export const UploadFileController = async (req: Request, res: Response) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const result = await productService.uploadFile(req.files.imgUrl);

  return res.status(200).json({
    message: "Upload success",
    data: result,
  });
};

export const CreateProductController = async (
  req: Request<ParamsDictionary, any, CreateReqBody>,
  res: Response
) => {
  const result = await productService.create(req.body);

  return res.status(200).json({
    message: "Create a new product succsess",
    data: result,
  });
};

export const ListProductPaginationController = async (
  req: Request,
  res: Response
) => {
  let limit = Number(req.query.limit);
  let page = Number(req.query.page);

  const result = await productService.listPagination(limit, page);

  return res.status(200).json({
    message: "List Pagination",
    data: result,
  });
};

export const updateProductController = async (
  req: Request<ParamsDictionary, any, UpdateReqBody>,
  res: Response
) => {
  let { name, description, price, id } = req.body;
  const result = await productService.update(id, name, description, price);

  return res.status(200).json({
    message: "Update success",
    data: result,
  });
};

export const deleteProductController = async (
  req: Request<ParamsDictionary, any, DeleteReqBody>,
  res: Response
) => {
  let { id } = req.body;
  const result = await productService.delete(id);

  return res.status(200).json({
    message: "Delete success",
    data: result,
  });
};
