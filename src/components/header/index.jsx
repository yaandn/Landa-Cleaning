import "./header.css";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
// import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="logo">
        {/* <img src={Logo} alt="logo-thebull" className="logo-img" /> */}
      </Link>
      <nav className="nav-container">
        <ul className="nav-list">
          <li>
            <Link to="/cardapio" className="nav-itens">
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to="/faleconosco" className="nav-itens">
              <span>Horários</span>
            </Link>
          </li>

          <li>
            <Link to="/nossahistoria" className="nav-itens">
              <span>Serviços</span>
            </Link>
          </li>

          <li>
            <Link to="/eventos" className="nav-itens">
              <span>Contato</span>
            </Link>
          </li>

          <li>
            <a
              to="*"
              className="nav-icons"
              href="https://www.facebook.com/thebullsteakhouseoficial"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
          </li>

          <li>
            <a
              className="nav-icons"
              href="https://www.instagram.com/thebullsteakhouse/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
