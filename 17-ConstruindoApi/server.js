const express = require("express");
const data = require("./data.json");
const app = express();

app.use(express.json());

app.get("/clients", (req, res) => {
  res.json(data);
});



app.listen(3000, () => {
  console.log("Server is running");
});