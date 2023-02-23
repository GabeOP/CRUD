const express = require("express");
const app = express();

//Para a aplicação entender formato JSON
app.use(express.json());

const Controllers = require("./controllers/controllers");

//Uso do dotenv para guardar informações
require('dotenv').config();
const PORT = process.env.PORT;

// configurando o servidor para receber requisições qualquer origem
const cors = require('cors')
app.use(cors())

//Rotas HTTP
app.get("/", Controllers.buscar);
app.get("/:id", Controllers.buscarID);
app.post("/", Controllers.inserir);
app.put("/:id", Controllers.editar);
app.delete("/:id", Controllers.excluir);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
