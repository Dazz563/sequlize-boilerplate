'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('products', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.STRING,
			},
			longDescription: {
				type: Sequelize.TEXT,
			},
			price: {
				type: Sequelize.FLOAT,
			},
			image: {
				type: Sequelize.STRING,
			},
			userId: {
				// foreign key
				type: Sequelize.INTEGER,
				field: 'user_id',
				references: {
					model: 'Users',
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
		await queryInterface.dropTable('products');
	},
};
