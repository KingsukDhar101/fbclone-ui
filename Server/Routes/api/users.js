const express = require("express");
const app = express.Router();
const Users = require("../../Constants/users.json");

app.get("/", (req, res) => {
  res.json([...Users]);
});

app.post("/", (req, res) => {
  const { Username, Fullnamne, GitHub, LinkedIn } = req.body;
  if (
    Username &&
    FullName &&
    GitHub &&
    LinkedIn &&
    Username.trim().length > 3 &&
    FullName.trim().length > 3 &&
    GitHub.trim().length > 22 &&
    LinkedIn.trim().length > 28
  ) {
    if (!Users.find((user) => user.Username === Username)) {
      Users.push({ Username, FullName, GitHub, LinkedIn });
      res
        .status(201)
        .json(`User ${FullName} with username ${Username} has been created`);
    } else {
      res
        .status(409)
        .json({ Error: `User with username ${Username} already exists.` });
    }
  } else {
    res.status(400).json({
      Error:
        "You have to send all the values for Username, FullName, GitHub, LinkedIn",
    });
  }
});

module.exports = app;
