// Index.js gathers all groups of routes that are separated by files;

// Imports:
const { Router } = require('express');
const userRoutes = require('./users.routes'); // user group routes
const notesRoutes = require('./notes.routes'); // user group routes

const routes = Router() // initialize express routes


routes.use('/users', userRoutes);
routes.use('/notes', notesRoutes);


// Exports:
module.exports = routes