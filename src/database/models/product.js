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
			Product.belongsTo(models.User, {foreignKey: 'user_id'});
		}
	}
	Product.init(
		{
			prodName: {
				type: DataTypes.STRING,
				field: 'product_name',
			},
			description: DataTypes.STRING,
			longDescription: DataTypes.TEXT,
			price: DataTypes.FLOAT,
			image: DataTypes.STRING,
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
				field: 'created_at',
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
				field: 'updated_at',
			},
			userId: {
				type: DataTypes.INTEGER,
				field: 'user_id',
				references: {
					model: 'Users',
					key: 'id',
				},
			},
		},
		{
			sequelize,
			modelName: 'Product',
		}
	);
	return Product;
};
