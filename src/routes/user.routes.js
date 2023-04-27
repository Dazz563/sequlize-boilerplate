const {
	addUser, //
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
} = require('../controllers/users.controller');

const express = require('express');
const userRoutes = express.Router();

userRoutes.post('/', addUser);
userRoutes.get('/', getAllUsers);
userRoutes.get('/:id', getUserById);
userRoutes.patch('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);

module.exports = userRoutes;
