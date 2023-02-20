const sequelize = require("../database/db");

const Controllers = {
  buscar: async (req, res) => {
    try {
      const [results, metadatas] = await sequelize.query(
        "SELECT * FROM pessoas"
      );
      res.json(results);
    } catch (error) {
      res.json(error);
    }
  },

  buscarID: async (req, res) => {
    try {
      const { id } = req.params;
      const [results, metadatas] = await sequelize.query(
        `SELECT * FROM pessoas WHERE id = ${id}`
      );
      res.json(results);
    } catch (error) {
      res.json(error);
    }
  },

  inserir: async (req, res) => {
    try {
      const { nome, email } = req.body;
      await sequelize.query(
        `INSERT INTO pessoas(nome, email) VALUES('${nome}', '${email}')`
      );
      res.json("Informação INSERIDA com sucesso!");
    } catch (error) {
      res.json(error);
    }
  },

  editar: (req, res) => {
    try {
      const { id, nome, email } = req.body;
      const { indice } = req.params;
      pessoa[indice] = { id, nome, email };
      res.send("Informação EDITADA com sucesso!");
    } catch (error) {
      res.json(error);
    }
  },

  excluir: async (req, res) => {
    try {
      const { id } = req.params;
      await sequelize.query(`DELETE FROM pessoas where id = ${id}`);
      res.json("Informação DELETADA com sucesso!");
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = Controllers;
