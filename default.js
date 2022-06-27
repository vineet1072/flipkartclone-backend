import { products } from "./constants/product.js";
import Product from "./model/productSchema.js";

const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("data imported successfully");
  } catch (err) {
    console.log("error while inserting default data", err.message);
  }
};

export default DefaultData;
