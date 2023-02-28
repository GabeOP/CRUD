import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import Footer from "./Footer";
import Header from "./Header";
import "../../style/Assinatura.css";

Modal.setAppElement("#root");

//    function editarUsuario(req, res) {
//     const { id } = axios.put("http://localhost:3000/", {
//       nome: nome,
//       email: email,
//     });
//   }

export default function ModalButton() {
  const [modalAberto, SetModalAberto] = useState(false);

  function openModal() {
    SetModalAberto(true);
  }

  function closeModal() {
    SetModalAberto(false);
  }

  //Parte que usa o banco de dados

  const [visualizar, setVisualizar] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      const dadosPessoas = res.data;
      setVisualizar(dadosPessoas);
    });
  }, []);

  function deletarUsuario(id) {
    const confirma = confirm(
      `Você tem certeza que deseja excluir a assinatura WhiteList?`
    );
    if (confirma) {
      axios.delete(`http://localhost:3000/${id}`);
      setVisualizar(visualizar.filter((teste) => teste.id !== id));
    }
  }
  return (
    <>
      <Header />
      <main id="mainAssinatura">
        <h2>Olá, usuário! Acesse as configurações sobre o seu plano.</h2>
        <div id="bloco">
          <p>Plano: WhiteList</p>
          <div id="wrapModal">
            <button onClick={openModal}>Mais informações</button>
            <Modal
              id="modal"
              isOpen={modalAberto}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
            >
              <div>
                <h2>Mais informações sobre o </h2>
              </div>

              <hr></hr>
              <div id="wrapContainer">
                <div id="cliente-user">
                  <div>
                    <div>
                      {visualizar.map((item) => (
                        <div key={item.id}>
                          <div id="infosModal">
                            <ul>
                              <li>
                                Nome impresso no cartão:{" "}
                                <span>{item.nome_cartao}</span>
                              </li>
                              <li>
                                Data da compra: <span>{item.data_val}</span>
                              </li>
                              <li>
                                Plano adquirido:
                                <select>
                                  <option>WhiteList</option>
                                  <option>BlackList</option>
                                  <option>GoldenList</option>
                                </select>
                              </li>
                            </ul>
                          </div>

                          <div id="btnsModal">
                            <button>Editar</button>
                            <button onClick={() => deletarUsuario(item.id)}>
                              Cancelar assinatura
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div id="wrapBtnFechar">
                  <button id="btnFechar" onClick={closeModal}>Fechar</button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
