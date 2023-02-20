const express = require("express");
const app = express();
app.use(express.json());
const Controllers = require("./controllers/controllers");
require('dotenv').config();
const PORT = process.env.PORT;
const Pessoa = require("./database/db");
Pessoa.sync();

app.get("/", Controllers.buscar);
app.get("/:id", Controllers.buscarID);
app.post("/", Controllers.inserir);
app.patch("/:id", Controllers.editar);
app.delete("/:id", Controllers.excluir);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
