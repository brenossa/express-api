const products = require('../models/products');

const getProducts = (req, res) => {
  return res.json(products);
};

const getProduct = (req, res) => {
  const { productId } = req.params;
  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return res.status(404).json({ error: "This product doesn't exist." });
  }

  return res.status(200).json(product);
};

const postProduct = (req, res) => {
  const { name, price } = req.body;

  if (name && price) {
    const newProduct = {
      id: products.length + 1,
      name: name,
      price: price
    };

    products.push(newProduct);
    return res.status(201).json({ success: true, product: newProduct });
  }

  return res.status(400).json({ error: 'Bad request' });
};

const putProduct = (req, res) => {
  const { productId } = req.params;
  const { name, price } = req.body;

  const productIndex = products.findIndex((product) => product.id === Number(productId));

  if (productIndex === -1) {
    return res.status(404).json({ error: "This product doesn't exist." });
  }

  if (!name && !price) {
    return res.status(400).json({ error: "Bad request" });
  }

  products[productIndex].name = name;
  products[productIndex].price = price;

  return res.status(200).json({ success: true, product: products[productIndex] });
}

const deleteProduct = (req, res) => {
  const { productId } = req.params;
  const productIndex = products.findIndex((product) => product.id === Number(productId));

  if (productIndex === -1) {
    return res.status(404).json({ error: "This product doesn't exist." });
  }

 const deletedProduct = products.splice(productIndex, 1)[0];

  return res.status(200).json({ success: true, deletedProduct: deletedProduct });
};

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct
}