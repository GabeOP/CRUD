const sequelize = require("../database/db");

const Controllers = {
  buscar: async(req, res) => {
    try {
      const [results, metadatas] = await sequelize.query(
        "SELECT * FROM pessoas"
      );
      results.length === 0 ? res.json({data: "Não há registros de pessoas."}) : res.json(results);
    } catch (error) {
      res.json(error);
    }
  },

  //Resolver retorno de id inválido
  buscarID: async (req, res) => {
    try {
      const { id } = req.params;
      const [results, metadatas] = await sequelize.query(
        `SELECT * FROM pessoas WHERE id = ${id}`
      );
      results.map((item)=>{
        const teste = item.id
        !teste ? res.json({data: "ID inválido. Tente novamente."}) : res.json(results);
      })
      
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

  editar: async(req, res) => {
    try {
      const { nome, email } = req.body;
      const { id } = req.params;
      await sequelize.query(`UPDATE pessoas SET nome = '${nome}', email = '${email}' WHERE id = ${id}`)
      res.json("Informação EDITADA com sucesso!");
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
