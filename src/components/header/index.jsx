import "./header.css";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiOutlineInstagram ,AiOutlineMenu} from "react-icons/ai";
import {IoIosCloseCircle, IoIosMenu} from 'react-icons/io'

import {HiMenu} from "react-icons/hi"
 import Logo from "../../assets/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  if (menuAberto === false) {
     return (
      <div className="header-container">
        
          <a href="#home"><img src={Logo} alt="logo-thebull" className="logo-img" /> </a>
      
        <nav className="nav-container">
          <ul className="nav-list">
            <li>
              
                <a className="nav-itens" href="#home"><span>Home</span></a>
              
            </li>

            <li>
            
                <a className="nav-itens" href="#servicos"><span>Services</span></a>
              
            </li>

          

            <li>
              
                <a className="nav-itens" href="#sobrenos"><span>About Us</span></a>
              
            </li>

            <li>
              
                <a className="nav-itens" href="#contato"><span>Contact us</span></a>
              
            </li>

            <li>
              
                <a className="nav-itens" href="#avaliacoes"><span>Reviews</span></a>
              
            </li>

          

          </ul>
        </nav>
        <div className="botao-menu" onClick={() => setMenuAberto(true)}>
                <HiMenu color="#4f1964;" size={30}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header-container-responsivo">
        
        
      
        <nav className="nav-container-responsivo">
          <ul className="nav-list-responsivo">
            <li onClick={() => setMenuAberto(false)}>
              
                <a className="nav-itens-responsivo" href="#home"><span>Home</span></a>
              
            </li>

            <li onClick={() => setMenuAberto(false)}>
            
                <a className="nav-itens-responsivo" href="#servicos"><span>Services</span></a>
              
            </li>

          

            <li onClick={() => setMenuAberto(false)}>
              
                <a className="nav-itens-responsivo" href="#sobrenos"><span>About Us</span></a>
              
            </li>

            <li onClick={() => setMenuAberto(false)}>
              
                <a className="nav-itens-responsivo" href="#contato"><span>Contact us</span></a>
              
            </li>

            <li onClick={() => setMenuAberto(false)}>
              
                <a className="nav-itens-responsivo" href="#avaliacoes"><span>Reviews</span></a>
              
            </li>

            <li onClick={() => setMenuAberto(false)}>
              <div className="botao-menu-responsivo" onClick={() => setMenuAberto(false)}>
                <IoIosCloseCircle size={30} color="#4f1964"/>
              </div>
            </li>
          </ul>
        </nav>
       
      </div>
      
    )
  }
 
};
export default Header;
