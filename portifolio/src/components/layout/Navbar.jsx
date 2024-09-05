import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import styles from './modules/Navbar.module.css';
import mobileIconMenu from '../imgs/menu_white_36dp.svg';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu móvel
  const navigate = useNavigate();

  const handleScroll = (section) => {
    setMenuOpen(false); // Fecha o menu ao clicar em um item
    navigate('/'); 
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna o estado do menu móvel
  };

  return (
    <div className={`${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbar_atributtes}>
        <div className={styles.ajuste}>
          <nav className={`${styles.navbar}`}>
            <div className={styles.menu}>
              <ScrollLink to="home" smooth={true} duration={500}>
                <div className={styles.img_logo}>
                  <h1>José Leandro Vilela</h1>
                </div>
              </ScrollLink>
              <div className={styles.nav_list}>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>
                      Home
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>
                      Sobre Mim
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>
                      Projetos
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('contacts'); }}>
                      Entre em Contato
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.mobile_menu_icon}>
                <button onClick={toggleMenu}>
                  <img className={styles.icon} src={mobileIconMenu} alt="Menu" />
                </button>
              </div>
            </div>
          </nav>
          {/* Adicione a classe 'open' com base no estado do menu móvel */}
          <div className={`${styles.mobile_menu} ${menuOpen ? styles.open : ''}`}>
            <ul className={styles.list_mobile}>
              <li className={styles.item_mobile}>
                <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>
                  Home
                </a>
              </li>
              <li className={styles.item_mobile}>
                <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>
                  Sobre Mim
                </a>
              </li>
              <li className={styles.item_mobile}>
                <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>
                  Projetos
                </a>
              </li>
              <li className={styles.item_mobile}>
                <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('contacts'); }}>
                  Entre em Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
