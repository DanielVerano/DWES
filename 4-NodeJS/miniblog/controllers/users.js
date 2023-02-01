const User = require('../models/User');

const getAllUsers = (req, res) => {
    User.find({}).exec()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).send(err))
}

const getUser = (req, res) => {
    const id = req.params.id;
    User.findById(id).exec()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).send(err))
}

const createUser = (req, res) => {
    const newUser = req.body;
    User.create(newUser)
        .then(() => res.status(200).json({ msg: `El usuario ${newUser.username} ha sido añadido satisfactoriamente` }))
        .catch(err => res.status(400).send(err))
}

const updateUser = (req, res) => {
    const id = req.params.id;
    const newUser = req.body;
    User.findByIdAndUpdate(id, newUser).exec()
        .then(newUser => res.status(200).json(newUser))
        .catch(err => res.status(500).send(err))
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id).exec()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).send(err))
}

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };