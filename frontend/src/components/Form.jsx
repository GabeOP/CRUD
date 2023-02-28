import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../style/Form.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Form() {

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [endereco, setEndereco] = useState();
  const [forma_pagamento, setForma_pagamento] = useState();
  const [num_cartao, setNum_cartao] = useState();
  const [nome_cartao, setNome_cartao] = useState();
  const [data_val, setData_val] = useState();
  const [cvv, setCvv] = useState();



  function cadastrarUsuario() {
    axios
      .post("http://localhost:3000/", {
        nome: nome,
        email: email,
        endereco: endereco,
        forma_pagamento: forma_pagamento,
        num_cartao: num_cartao,
        nome_cartao: nome_cartao,
        data_val: data_val,
        cvv: cvv,
      })
      .then((res) => {
        console.log(res);
      });
  }



  function verificar() {
    if(!nome || !email || !endereco || !num_cartao || !nome_cartao || !data_val || !cvv) {
      alert("Complete todos os campos.")
    }else {
      alert("Sua compra foi finalizada com sucesso!")
    }
  }

  return (
    <>
      <Header />
      <div id="wrapForm">

        <form
          className="card rounded-3 shadow-sm"
          id="formulario"
          onSubmit={cadastrarUsuario}
        >
          <div className="card-header text-bg-info py-3">
            <h4 id="tituloForm" className="">
              WhiteList <br /> R$99,90
            </h4>
          </div>
          <div id="wrapInfos">
            <div className="wrapInfos">
              <label htmlFor="nome">Nome completo:</label>
              <input
                required
                type="text"
                name="nome"
                id="nome"
                onChange={(e) => setNome(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
              <input
                required
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Endereço:</label>
              <input
                required
                type="text"
                name="endereco"
                id="endereco"
                onChange={(e) => setEndereco(e.target.value)}
              />
              <label htmlFor="formaPagamento">Forma de pagamento:</label>
              <select
                required
                onChange={(e) => setForma_pagamento(e.target.value)}
              >
                <option value={"Cartão de crédito"}>Cartão de crédito</option>
                <option value={"PIX"}>PIX</option>
                <option value={"Boleto bancário"}>Boleto bancário</option>
              </select>
            </div>
            <div className="wrapInfos">
              <label htmlFor="numCartao">Número do cartão</label>
              <input
                type="number"
                onChange={(e) => setNum_cartao(e.target.value)}
                name="num_cartao"
                id="num_cartao"
              />
              <label htmlFor="nomeCartao">Nome impresso no cartão</label>
              <input
                type="text"
                onChange={(e) => setNome_cartao(e.target.value)}
                name="nome_cartao"
                id="nome_cartao"
              />
              <label>Data de validade</label>
              <input
                type="date"
                onChange={(e) => setData_val(e.target.value)}
                name="data_val"
                id="data_val"
              />
              <label>CVV</label>
              <input
                type="number"
                onChange={(e) => setCvv(e.target.value)}
                name="cvv"
                id="cvv"
                maxLength={3}
              />
            </div>
          </div>

          <input onClick={verificar} id="btnForm" type="submit" value="Finalizar" />

        </form>
      </div>
      <Footer />
    </>
  );
}
