const express = require('express');
const app = express.Router();
const api = require('./api.js');

app.use("/api", api);

module.exports = app;