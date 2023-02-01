var express = require('express');
var router = express.Router();
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users');

// Get All Users
router.get('/', getAllUsers);

// Get User
router.get('/:id', getUser);

// Create User
router.post('/', createUser);

// Update User
router.put('/:id', updateUser);

// Delete User
router.delete('/:id', deleteUser);

module.exports = router;