import { Link } from 'react-router-dom';
import '../../style/Header.css'

export default function Header() {
  return (
    <>
      <nav id='navHeader' className="bg-black navbar navbar-expand-md">
        <div className="container-fluid" id="container-navbar">

          <Link to={'/planos'} className="text-info navbar-brand ">Shar'k Tech</Link>
          <button
            className="bg-info navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-info"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="text-info nav-link" to={'/planos'}>
                  Planos
                </Link>
              </li>
              <li className="nav-item">
                <a className="text-info nav-link" href="#Titulo1">
                  Quem Somos
                </a>
              </li>
            </ul>
            <form className="d-flex gap-3">
              <button
                className="btn btn-outline-info"
                type="submit"
                id="cadastroI"
              >
                <a className="text-light " href="cadastro.html">
                  Cadastre-se
                </a>
              </button>
              <button className=" btn btn-outline-info">
                <a className="text-light" href="login.html">
                  Login
                </a>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}