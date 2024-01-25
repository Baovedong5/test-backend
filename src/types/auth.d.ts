import { Query } from "express-serve-static-core";

export interface RegisterReqBody {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginReqBody {
  email: string;
  password: string;
}

export interface CreateReqBody {
  name: string;
  description: string;
  imgUrl: string;
  price: number;
}

export interface UpdateReqBody {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface DeleteReqBody {
  id: string;
}

export interface Pagination extends Query {
  limit: string;
  page: string;
}
