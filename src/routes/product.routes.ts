import express from "express";
import {
  CreateProductController,
  ListProductPaginationController,
  deleteProductController,
  updateProductController,
} from "~/controllers/product.controllers";
import catchAsync from "~/utils/catchAsync";

const productRouter = express.Router();

productRouter.post("/", catchAsync(CreateProductController));

productRouter.get("/list", catchAsync(ListProductPaginationController));

productRouter.put("/update", catchAsync(updateProductController));

productRouter.delete("/delete", catchAsync(deleteProductController));

export default productRouter;
