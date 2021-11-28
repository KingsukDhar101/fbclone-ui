const fs = require("fs");
const express = require("express");
const app = express.Router();
const Users = () =>
  JSON.parse(fs.readFileSync(__dirname + "../../Constants/users.json"));

const { hashPassword } = require("../../helpers/userHelper");

// Login to the App.
app.post("/login", (req, res) => {});

// Register with the App.
app.post("/register", (req, res) => {
  const users = Users();
  const joindate = new Date();
  const { username, password, fullname, location, email, avatar } = req.body;

  const valid =
    typeof username === "string" &&
    typeof password === "string" &&
    typeof fullname === "string" &&
    typeof location === "string" &&
    typeof email === "string" &&
    typeof avatar === "string" &&
    username.trim().length > 0 &&
    password.trim().length > 0 &&
    fullname.trim().length > 0 &&
    location.trim().length > 0 &&
    email.trim().length > 0 &&
    avatar.trim().length > 0;

  if (valid) {
    if (users.username === username || users.username.email === email) {
      res.status(409).json({
        Error: "User already exists.",
      });
    } else {
      users[username] = {
        username,
        password,
        fullname,
        location,
        email,
        avatar,
      };
      res.json({
        username,
        password,
        fullname,
        location,
        email,
        avatar,
        joindate,
        valid,
        users,
      });
      res.status(201).json({
        Message: `User ${fullname} created with username ${username}`
      });
    }
  } else {
    res.status(400).json("Please give all the fields");
  }

  // //check if valid request
  // if(valid){
  //   // check if there's already a user with the same email and username
  //   if( users[email] === email || users[username] === username){
  //     // Users already exists.
  //     res.status(409).json({
  //       Error: "User already exists."
  //     });
  //   }else {
  //     // store the new user
  //     users[username] =
  //   }
  // } else {
  //   res.status(400).json({
  //     Error: "Please give all the fields."
  //   });
  // }
});

// get current loggedin user
app.get("/", (req, res) => {});

// logout the session
app.delete("/", (req, res) => {});

module.exports = app;
