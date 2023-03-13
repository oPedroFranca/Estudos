const express = require("express");
const data = require("./data.json");
const app = express();

app.use(express.json());

app.get("/clients", (req, res) => {
  res.json(data);
});

app.get("/clients/:id", (req, res) => {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if(!client) return res.status(204).json();

  res.json(client);
});

