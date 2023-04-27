const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
// npm i rotating-file-stream
const rfs = require('rotating-file-stream');
const morgan = require('morgan');

const productRoutes = require('./routes/product.routes');
const reviewRoutes = require('./routes/review.routes');
const userRoutes = require('./routes/user.routes');

/**
 * CORS
 */
app.use(cors({origin: '*'}));

/**
 * Parsing JSON & formUrlEncoded
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 *  Create a rotating write stream
 *  Setting up the morgan token 'host' to log the hostname
 */
const accessLogStream = rfs.createStream('access.log', {
	interval: '1d', // rotate daily
	path: path.join(__dirname, 'log'),
});
morgan.token('host', function (req, res) {
	// morgan token
	return req.hostname;
});
app.use(morgan('combined', {stream: accessLogStream}));

/**
 * Serving static files (css, images etc.)
 */
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/review', reviewRoutes);

module.exports = app;
