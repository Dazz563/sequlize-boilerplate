const http = require('http');

const app = require('./app');
const database = require('../config/database');

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

// Synchronize the models with the database and start the server
database
	// .sync({force: true})
	.sync()
	.then(() => {
		console.log('Models synchronized successfully.');
		server.listen(PORT, () => console.log('Server started on port 3000.'));
	})
	.catch((err) => console.error('Unable to sync models:', err));
