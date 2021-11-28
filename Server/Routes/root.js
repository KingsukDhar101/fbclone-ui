const express = require('express');
const app = express.Router();
const api = require('./api.js');

app.use("/api", api);
// app.post("/login", (req,res)=>{
//   res.json(req.body);
// });

module.exports = app;