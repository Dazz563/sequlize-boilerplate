'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.hasMany(models.Review);
		}
	}
	Product.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			longDescription: DataTypes.TEXT,
			price: DataTypes.FLOAT,
			image: DataTypes.STRING,
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
				defaultValue: sequelize.fn('NOW'),
				field: 'created_at',
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
				defaultValue: sequelize.fn('NOW'),
				field: 'updated_at',
			},
		},
		{
			sequelize,
			modelName: 'Product',
		}
	);
	return Product;
};
