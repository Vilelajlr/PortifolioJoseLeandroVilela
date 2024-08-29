import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Importar Link do react-scroll
import { useNavigate } from 'react-router-dom'; // Importar Link e useNavigate do react-router-dom

import styles from './modules/Navbar.module.css';


function Navbar() {
  const [scrolled, setScrolled] = useState(false); // Estado para controlar a rolagem
  const navigate = useNavigate(); // Hook para navegação

  const handleScroll = (section) => {
    navigate('/'); // Redireciona para a página principal
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente para a seção
    }, 100); // Pequeno delay para garantir que a rolagem ocorra após a navegação
  };

  // Hook para verificar a rolagem da página
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={`${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.navbar} `}>
        <div className={styles.menu}>
          <ScrollLink to="home" smooth={true} duration={500}>
            <div className={styles.img_logo}>
              <h1>José Leandro Vilela</h1>
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
              <a href="/" onClick={(e)=> {e.preventDefault(); handleScroll('contacts');}}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
