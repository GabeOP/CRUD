import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import '../../style/Card.css'

export default function Card() {

  const [visualizar, setVisualizar] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      const dadosPessoas = res.data;
      setVisualizar(dadosPessoas);
    });
  }, []);

  return (
    
    <div id="wrapperCard">

        <div className="col-md-3" id="card">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header text-bg-info py-3">
              <h4 className="my-0 fw-normal">WhiteList</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">R$99,90</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>
                  Terá Acesso a toda nossa lista de investidores White Rank
                </li>
                <li>Contato direto com nossos Sharks White</li>
                <li>Suporte online 24/7</li>
              </ul>
              <Link to={'/formulario'}><button type="button" className="w-100 btn btn-lg btn-outline-info">
                Assinar
              </button></Link>
            </div>
          </div>
        </div>


      <div className="col-md-3" id="card">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header text-bg-info py-3">
            <h4 className="my-0 fw-normal">BlackList</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">R$239,90</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>
                Possua acesso a todos nossos investidores Black que já estão há
                anos no Mercado!
              </li>
              <li>Todos os investidores Black já possuem empresas </li>
              <li>Suporte presencial 24/7 / Whatsapp. </li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-info">
              Assinar
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-3" id="card">
        <div className="card mb-4 rounded-3 shadow-sm border-info">
          <div className="card-header py-3 text-bg-info border-info">
            <h4 className="my-0 fw-normal">GoldenList</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">R$549,90</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>
                {" "}
                Tenha o privilégio de ter todos os Sharks High Level em suas
                mãos!
              </li>
              <li>Eleve seus projetos Tech em outro nível com esse poder </li>
              <li>
                Felipe Tito, Caito Maia, José Carlos Semenzato, Carol Paiffer
                entre outros
              </li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-info">
              Assinar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}