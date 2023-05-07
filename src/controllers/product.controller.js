const {Product, Review} = require('../database/models');

exports.addProduct = async (req, res, next) => {
	const {prodName, price, description, longDescription, image} = req.body;
	// Thid will change when we add authentication
	const userId = req.body.userId;
	try {
		const newProduct = await Product.create({
			prodName,
			price,
			description,
			longDescription,
			image,
			userId,
		});

		return res.status(201).json({
			message: 'Product created!',
			data: newProduct,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			message: 'Something went wrong',
		});
	}
};

exports.getAllProducts = async (req, res, next) => {
	try {
		const products = await Product.findAll({});

		return res.status(200).json({
			message: 'All products',
			data: products,
		});
	} catch (err) {
		console.log(err);
		next();
	}
};

exports.getProductById = async (req, res, next) => {
	const id = req.params.id;
	try {
		const product = await Product.findOne({
			where: {
				id: id,
			},
		});

		return res.status(200).json({
			message: `Product with id: ${id}`,
			data: product,
		});
	} catch (err) {
		console.log(err);
		next();
	}
};

exports.updateProduct = async (req, res, next) => {
	const id = req.params.id;
	try {
		const product = await Product.update(req.body, {
			where: {
				id: id,
			},
		});

		return res.status(200).json({
			message: `Product with id: ${id} successfully updated`,
			data: product,
		});
	} catch (err) {
		console.log(err);
		next();
	}
};

exports.deleteProduct = async (req, res, next) => {
	const id = req.params.id;
	try {
		await Product.destroy({
			where: {
				id: id,
			},
		});

		return res.status(200).json({
			message: `Product with id: ${id} successfully deleted`,
		});
	} catch (err) {
		console.log(err);
		next();
	}
};

exports.getProductReviews = async (req, res, next) => {
	const id = req.params.id;
	try {
		const productReviews = await Product.findAll({
			include: Review,
			where: {
				id: id,
			},
		});

		return res.status(200).json({
			message: `All product reviews`,
			data: productReviews,
		});
	} catch (err) {
		console.log(err);
		next();
	}
};
