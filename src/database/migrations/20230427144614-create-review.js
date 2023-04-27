'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Reviews', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			rating: {
				type: Sequelize.INTEGER,
			},
			description: {
				type: Sequelize.TEXT,
			},
			productId: {
				// foreign key
				type: Sequelize.INTEGER,
				field: 'product_id',
				references: {
					model: 'Products',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				field: 'created_at',
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				field: 'updated_at',
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Reviews');
	},
};
