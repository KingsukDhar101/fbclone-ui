const express = require("express");
const app = express();
const PORT = process.env.port || 5000;
const root = require("./Routes/root");
app.use(express.json());

app.use("/", root);
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}.`);
});
