import Product from "../Models/productModel.js";

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getproduct = async (req, res) => {
  try {
    const product = await Product.find();
    return res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getproductbyID = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found.." });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateproduct = async (req, res) => {
  try {
    const product = await Product.findbyId(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found.." });
    }
    Object.assign(product, req.body);
    await product.save();
    res.json(product);
  } catch (error) {}
};

export const deleteproduct = async (req, res) => {
  try {
    const product = await Product.findbyId(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found.." });
    }
    await product.deleteOne();

    res.json({ message: "Product deleted successfully.." });
  } catch (error) {}
};
