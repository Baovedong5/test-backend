import path from "path";
import Product from "~/schemas/product.schema";
import { CreateReqBody, UpdateReqBody } from "~/types/auth";

class ProductService {
  async uploadFile(fileObject: any) {
    let uploadPath = path.resolve(__dirname, "../public/images/upload");

    let extName = path.extname(fileObject.name);

    let baseName = path.basename(fileObject.name, extName);

    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = `${uploadPath}/${finalName}`;

    try {
      await fileObject.mv(finalPath);
      return {
        status: "success",
        path: finalName,
      };
    } catch (err) {
      return {
        status: "failed",
        path: null,
      };
    }
  }

  async create(payload: CreateReqBody) {
    const newProduct = await Product.create({
      ...payload,
    });

    return {
      _id: newProduct._id,
    };
  }

  async listPagination(limit: number, page: number) {
    let offset = (page - 1) * limit;
    let defaultLimit = limit ? limit : 10;
    const totalItems = (await Product.find({})).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await Product.find({})
      .skip(offset)
      .limit(defaultLimit)
      .exec();

    return {
      meta: {
        current: page,
        pageSize: limit,
        pages: totalPages,
        total: totalItems,
      },
      result,
    };
  }

  async update(id: string, name: string, description: string, price: number) {
    const updated = await Product.updateOne(
      { _id: id },
      { name, description, price }
    );

    return updated;
  }

  async delete(id: string) {
    const deleted = await Product.deleteOne({ _id: id });
    return deleted;
  }
}

const productService = new ProductService();

export default productService;
