const express = require('express');
const app = express.Router();

const users = require('./api/users.js');
const auth =  require('./api/auth.js');

app.get("/", (req, res)=>{
  res.json("Welcome to API Server");
});

app.use("/users", users);
app.use("/auth", auth);

module.exports = app;