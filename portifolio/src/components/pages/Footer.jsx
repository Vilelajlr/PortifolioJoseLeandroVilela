import React from "react";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import styles from "./modules/Footer.module.css";

export default function Footer() {

    const email = "mailto:vilelajlr@gmail.com";
    const github = "https://github.com/Vilelajlr";
    const instagram = "https://www.instagram.com/joseleandrovilela/";
    const linkedin = "https://www.linkedin.com/in/vilelajlr/";

    return(
        <footer className={styles.footer}>
            <div className={styles.flex}>
                <div className={styles.txt_logo}>
                    <h1>José Leandro Vilela</h1>
                </div>
                <div className={styles.txt_direitos}>
                    <p>Desenvolvido por José Leandro Vilela <span>&copy; 2024 - Todos os direitos reservados</span></p>
                </div>
                <div className={styles.icons}>
                    <a href={email}>
                        <MdEmail />
                    </a>
                    <a href={instagram}>
                        <FaInstagram />
                    </a>
                    <a href={linkedin}>
                        <FaLinkedin />
                    </a>
                    <a href={github}>
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );  
}