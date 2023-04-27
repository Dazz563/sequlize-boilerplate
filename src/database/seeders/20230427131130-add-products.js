'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const products = [];
		for (let i = 0; i < 10; i++) {
			products.push({
				name: `Product ${i}`,
				description: `Product ${i} description`,
				longDescription: `Product ${i} long description`,
				price: 10.99 * (i + 1),
				image: 'https://via.placeholder.com/150',
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}
		await queryInterface.bulkInsert('Products', products, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Products', null, {});
	},
};
