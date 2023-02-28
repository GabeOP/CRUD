import '../../style/Footer.css'

export default function Footer() {
  return (
    <>
      <footer className="p-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5 id="h5Footer">Quem somos</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-muted">
                  Relação com investidores
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-muted">
                  Trabalhe conosco
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-muted">
                  Carreira
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-muted">
                  FAQ's
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 id="h5Footer">Ajuda</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-muted">
                  Centro de ajuda
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-muted">
                  Termos de uso
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-muted">
                  Privacidade
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-muted">
                  Preferências de cookie
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-muted">
                  Informações corporativas
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-3 mb-3">
            <form>
              <h5 id="h5Footer">Ajude-nos a melhorar!</h5>
              <p>Receba todo mês o que há de novo e emocionante de nós.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label className="visually-hidden">
                  Email
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Seu Email Aqui"
                />
                <button className="btn btn-info" type="button">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2022 Shar'k Tech, All rights reserved </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
            </li>
            <li className="ms-3">
            </li>
            <li className="ms-3">
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
