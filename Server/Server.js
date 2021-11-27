const express = require("express");
const CORS = require('cors');

const app = express();
const PORT = process.env.port || 5000;

const root = require("./Routes/root.js");

// CORS middleware
app.use(CORS({origin: true}));
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// Middleware to parse POST Data
app.use(express.json());


app.use("/", root);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}.`);
});
