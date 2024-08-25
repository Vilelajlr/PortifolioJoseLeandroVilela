import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Importar Link do react-scroll
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Importar Link e useNavigate do react-router-dom

import styles from './modules/Navbar.module.css';
import logo from '../imgs/LogoSomenteDesenho.png';

function Navbar() {
  const navigate = useNavigate(); // Hook para navegação

  const handleScroll = (section) => {
    navigate('/'); // Redireciona para a página principal
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente para a seção
    }, 100); // Pequeno delay para garantir que a rolagem ocorra após a navegação
  };

  return (
  
    
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <ScrollLink to="home" smooth={true} duration={500}>
          <div className={styles.img_logo}>
            <img src={logo} alt="Logo Costs" />
          </div>
        </ScrollLink>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>
              Home
            </a>
          </li>
          <li className={styles.item}>
            <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>
              About
            </a>
          </li>
          <li className={styles.item}>
            <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>
              Projects
            </a>
          </li>
          <li className={styles.item}>
            <RouterLink to="/contact">
              Contact
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;
