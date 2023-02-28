import { Link } from 'react-router-dom';
import '../../style/Header.css'
import Logo from '../../img/logo.png'

export default function Header() {
  return (
    <>
      <nav id='navHeader' className="bg-black navbar navbar-expand-md">
        <div className="container-fluid" id="container-navbar">
          <img id='imgLogo' src={Logo} alt="" />
          <Link to={'/'} className="text-info navbar-brand " id='tituloHeader'>Shar'k Tech</Link>
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
            <ul id='ulHeader' className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="text-info nav-link" to={'/'}>
                  Planos
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/assinatura'} className="text-info nav-link" href="#Titulo1">
                  Meu plano
                </Link>
              </li>
            </ul>
            <form className="d-flex gap-3">
              <button
                className="btn btn-outline-info"
                type="submit"
                id="cadastroI"
              >
                <a className="text-light ">
                  Cadastre-se
                </a>
              </button>
              <button className=" btn btn-outline-info">
                <a className="text-light">
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