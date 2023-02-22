const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("Conexão com o banco de dados estabelecida com sucesso!");
} catch (error) {
  console.log("Erro na conexão com o banco de dados. Erro: " + error);
}

const Pessoa = sequelize.define("pessoas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = sequelize

