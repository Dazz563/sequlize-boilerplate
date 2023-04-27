const {Sequelize, DataTypes, Op} = require('sequelize');
const sequelize = require('../../config/database');

const Model = Sequelize.Model;

class Review extends Model {}

Review.init(
	{
		rating: {
			type: DataTypes.INTEGER,
		},
		description: {
			type: DataTypes.TEXT,
		},
	},
	{
		sequelize,
		modelName: 'review',
	}
);

module.exports = Review;
