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
            
              <a className="nav-itens" href="#home"><span>Home</span></a>
            
          </li>

          <li>
           
              <a className="nav-itens" href="#servicos"><span>Services</span></a>
            
          </li>

         

          <li>
            
              <a className="nav-itens" href=""><span>About Us</span></a>
            
          </li>

          <li>
            
              <a className="nav-itens" href=""><span>Contact us</span></a>
            
          </li>

        </ul>
      </nav>
    </div>
  );
};
export default Header;
