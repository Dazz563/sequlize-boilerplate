const {Sequelize, DataTypes, Op} = require('sequelize');
const sequelize = require('../../config/database');
const Review = require('./review.model');

const Model = Sequelize.Model;

class Product extends Model {}

Product.init(
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
		},
		description: {
			type: DataTypes.TEXT,
		},
		published: {
			type: DataTypes.BOOLEAN,
		},
	},
	{
		sequelize,
		modelName: 'product',
	}
);

Product.hasMany(Review, {onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'product_id'});

module.exports = Product;
