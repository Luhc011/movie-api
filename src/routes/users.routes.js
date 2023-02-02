const { Router } = require('express');

const UsersController = require('../controllers/UsersController') // import controllers

const usersRoutes = Router();

const usersController =  new UsersController(); // new instance of Controller

usersRoutes.post('/', usersController.create)
usersRoutes.put('/:id', usersController.update)

module.exports = usersRoutes
