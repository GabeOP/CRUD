import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../style/Form.css'
import Header from "./Header";
import Footer from "./Footer";
export default function Form() {
  
  const [visualizar, setVisualizar] = useState([]);
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      const dadosPessoas = res.data;
      setVisualizar(dadosPessoas);
    });
  }, []);

  function cadastrarUsuario() {
    axios
      .post("http://localhost:3000/", { nome: nome, email: email })
      .then((res) => {
        console.log(res);
      });
  }

  function editarUsuario(req, res) {
    const { id } = axios.put("http://localhost:3000/", {
      nome: nome,
      email: email,
    });
  }

  function deletarUsuario(id) {
    const confirma = confirm(
      `Você tem certeza que deseja excluir o usuário com id ${id}?`
    );
    if (confirma) {
      axios.delete(`http://localhost:3000/${id}`);
      setVisualizar(visualizar.filter((teste) => teste.id !== id));
    }
  }

  return (
    <>
      <Header />
      <div id="wrapForm">
        {/* {visualizar.map((item) => (
        <div key={item.id}>
          {item.id} - {item.nome} - {item.email}{" "}
          <button onClick={() => deletarUsuario(item.id)}>Excluir</button>
        </div>
      ))} */}
        <form className="card mb-4 rounded-3 shadow-sm" id="formulario" onSubmit={cadastrarUsuario}>
          <div className="card-header text-bg-info py-3">
            <h4 id="tituloForm" className="">WhiteList</h4>
          </div>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={"Ruan Natan"}
              onChange={(e) => setNome(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={"ruanatan@teste.com"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Endereço:</label>
            <input
              type="text"
              name="endereco"
              id="endereco"
            />
            <label htmlFor="formaPagamento">Forma de pagamento:</label>
            <select>
              <option>Selecione a forma de pagamento</option>
              <option>Cartão de crédito</option>
              <option>PIX</option>
              <option>Boleto bancário</option>
            </select>
          </div>
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
      <Footer />
    </>
  );
}