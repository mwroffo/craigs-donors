const express = require('express');
const app = express();

const routes = require('./routing.js');
app.use('/', routes);

app.listen(3000);