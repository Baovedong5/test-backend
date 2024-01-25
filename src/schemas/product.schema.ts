import { Schema, model } from "mongoose";

export interface IProduct {
  _id: string;
  name: string;
  imgUrl: string;
  price: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: String,
    imgUrl: String,
    price: Number,
    description: String,
    createdAt: Date,
    updatedAt: Date,
  },
  {
    timestamps: true,
  }
);

type Product = IProduct;

const Product = model<Product>("product", ProductSchema);

export default Product;
