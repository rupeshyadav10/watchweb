const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: 'Rolex Submariner', price: 10000, image: 'rolex-submariner.jpg' },
  { id: 2, name: 'Omega Seamaster', price: 8000, image: 'omega-seamaster.jpg' },
  // More products here
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get product details
app.get('/api/product/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
