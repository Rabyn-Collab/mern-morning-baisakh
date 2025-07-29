




export const getProducts = (req, res) => {
  return res.status(200).json({ message: 'Welcome To Products' });
}

export const getProduct = (req, res) => {
  const { id } = req.params;

  return res.status(200).json({ message: 'Welcome To Product' });
}

export const createProduct = (req, res) => {
  return res.status(200).json({ message: 'Welcome To Create Product' });
}

export const updateProduct = (req, res) => {
  return res.status(200).json({ message: 'Welcome To Update Product' });
}

export const deleteProduct = (req, res) => {
  return res.status(200).json({ message: 'Welcome To Delete Product' });
}