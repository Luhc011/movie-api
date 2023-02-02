const express = require('express');
const routes = require('./routes');
const app = express();

app.use(routes)


app.use(express.json());

const PORT = 3333;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));


