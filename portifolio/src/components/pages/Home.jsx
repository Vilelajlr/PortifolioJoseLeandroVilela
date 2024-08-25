import React from "react";

import imgMinha from "../imgs/imgPortifolio.png";

import styles from "./modules/Home.module.css";
import { FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";

import Link from '../layout/Link';

import AOS from "aos";

export default function Home(){
    
    return(
        
        <div className={styles.home} >
            <div className={styles.flex}>
                <div className={styles.txt_home}  >
                    <h1>Olá, meu nome é <span>José Leandro Vilela</span></h1>
                    <p>Web Developer</p>
                </div>
                <div className={styles.img_portifolio}>
                    <img src={imgMinha} alt="Minha foto"  />
                </div>
                <div className={styles.icons}>
                    <a href="https://www.instagram.com/joseleandrovilela/" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/vilelajlr/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>

                    <a href="">
                        <FaGithub />
                    </a>
                    
                    <div>
                        <Link to="/portifolio" className={styles.btn}>Portifólio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}