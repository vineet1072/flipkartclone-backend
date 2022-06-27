import Product from "../model/productSchema.js";

export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ message: error.mesage });
  }
};

export const getProductById = async (request, response) => {
  try {
    const product = await Product.findOne({ id: request.params.id });
    response.status(200).json(product);
  } catch (error) {
    response.status(500).json({ message: error.mesage });
  }
};
