const express = require('express'); //import express
const routes = require('./routes'); //import routes

const app = express();

//middleware use
app.use(express.json());
app.use(routes)

const PORT = 3333;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));


