'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction();
		try {
			// Add inactive column to Products table
			await queryInterface.addColumn(
				'Products',
				'inactive',
				{
					type: Sequelize.BOOLEAN,
					defaultValue: false,
				},
				{transaction}
			);
			// Add instock column to Products table
			await queryInterface.addColumn(
				'Products',
				'inStock',
				{
					type: Sequelize.BOOLEAN,
					defaultValue: false,
				},
				{transaction}
			);
			await transaction.commit();
		} catch (err) {
			await transaction.rollback();
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction();
		try {
			await queryInterface.removeColumn('Products', 'inactive', {transaction});
			await queryInterface.removeColumn('Products', 'inStock', {transaction});
			await transaction.commit();
		} catch (err) {
			await transaction.rollback();
		}
	},
};
