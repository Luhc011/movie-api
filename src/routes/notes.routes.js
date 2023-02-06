const { Router } = require('express');

const NotesController = require('../controllers/NotesController') // import controllers

const notesRoutes = Router();

const notesController =  new NotesController(); // new instance of Controller

notesRoutes.get('/', notesController.index)
notesRoutes.post('/:user_id', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)



module.exports = notesRoutes
