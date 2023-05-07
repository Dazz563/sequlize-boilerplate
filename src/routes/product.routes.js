const {
	addProduct, //
	getAllProducts,
	getProductById,
	updateProduct,
	deleteProduct,
	getProductReviews,
} = require('../controllers/product.controller');

const express = require('express');
const productRoutes = express.Router();

productRoutes.get('/', getAllProducts);
productRoutes.post('/', addProduct);
productRoutes.get('/:id', getProductById);
productRoutes.put('/:id', updateProduct);
productRoutes.delete('/:id', deleteProduct);
productRoutes.get('/product-reviews/:id', getProductReviews);

module.exports = productRoutes;
