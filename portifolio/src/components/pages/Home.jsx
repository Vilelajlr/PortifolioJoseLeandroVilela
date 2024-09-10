import React from "react";
import { Link as ScrollLink } from 'react-scroll';

import imgMinha from "../imgs/imgPortifolio.png";
import styles from "./modules/Home.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import Button from "../layout/Button";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.flex}>
        <div className={styles.txt_home} data-aos="fade-right">
          <h1>
            Olá, meu nome é <span>José Leandro Vilela</span>
          </h1>
          <p>Web Developer</p>

          <div className={styles.icons} data-aos="fade-up" data-aos-delay="100">
            <Button
              link="https://www.instagram.com/joseleandrovilela/"
              conteudo={<FaInstagram />}
              estilo="redes"
            />

            <Button
              link="https://www.linkedin.com/in/vilelajlr/"
              conteudo={<FaLinkedin />}
              estilo="redes"
            />

            <Button
              link="https://github.com/Vilelajlr"
              conteudo={<FaGithub />}
              estilo="redes"
            />

            <div>
              <ScrollLink to="contacts" smooth={true} duration={500}>
                <Button link="#" conteudo="Entre em contato" estilo="contact" />
              </ScrollLink>
            </div>
          </div>
        </div>

        <div className={styles.img_portifolio} data-aos="fade-left">
          <img src={imgMinha} alt="Minha foto" />
        </div>
      </div>
    </div>
  );
}
