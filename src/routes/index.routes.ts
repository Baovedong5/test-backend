import express from "express";
import authRouter from "./auth.routes";
import productRouter from "./product.routes";
import fileRouter from "./file.routes";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/product",
    route: productRouter,
  },
  {
    path: "/file",
    route: fileRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
