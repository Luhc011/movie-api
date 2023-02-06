const { Router } = require('express');

const TagsController = require('../controllers/TagsController') // import controllers

const tagsRoutes = Router();

const tagsController =  new TagsController(); // new instance of Controller

tagsRoutes.get('/:user_id', tagsController.index)



module.exports = tagsRoutes
