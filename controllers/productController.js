import Product from "../models/Product.js";





export const getProducts = async (req, res) => {
  try {

    const products = await Product.find({});
    return res.status(200).json({
      products
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export const getProduct = (req, res) => {
  const { id } = req.params;

  return res.status(200).json({ message: 'Welcome To Product' });
}

export const createProduct = async (req, res) => {

  return res.status(200).json({ message: 'Welcome To Create Product' });
}

export const updateProduct = (req, res) => {
  return res.status(200).json({ message: 'Welcome To Update Product' });
}

export const deleteProduct = (req, res) => {
  return res.status(200).json({ message: 'Welcome To Delete Product' });
}