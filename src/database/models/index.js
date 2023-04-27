'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');

// Get the basename of the current file
const basename = path.basename(__filename);

// Get the current environment or set it to "development" by default
const env = process.env.NODE_ENV || 'development';

// Get the configuration object for the current environment from the config file
const config = require('../config')[env];

// Create an empty object to store the models
const db = {};

// Create a Sequelize instance based on the configuration object
let sequelize;
if (config.use_env_variable) {
	// If the configuration specifies an environment variable to use, use that
	// environment variable instead of the other configuration options
	sequelize = new Sequelize(process.env[config.use_env_variable], {...config, logging: false});
} else {
	// Otherwise, use the regular configuration options
	sequelize = new Sequelize(config.database, config.username, config.password, {...config, logging: false});
}

// Load all the model files in the current directory
fs.readdirSync(__dirname)
	.filter((file) => {
		// Filter out hidden files, this file itself, test files, and non-JavaScript files
		return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js' && file.indexOf('.test.js') === -1;
	})
	.forEach((file) => {
		// For each model file, require it and initialize it with the Sequelize instance
		const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
		// Add the initialized model to the db object
		db[model.name] = model;
	});

// Set up associations between the models
Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

// Add the Sequelize instance and Sequelize constructor to the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Export the db object as the module
module.exports = db;
