import React from "react";

import imgMinha from "../imgs/imgPortifolio.png";

import styles from "./modules/Home.module.css";
import { FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";


import Button from "../layout/Button";

export default function Home(){
    
    return(
        
        <div className={styles.home} >
            <div className={styles.flex}>
                <div className={styles.txt_home}  >
                    <h1>Olá, meu nome é <span>José Leandro Vilela</span></h1>
                    <p>Web Developer</p>

                    <div className={styles.icons}>
                        <Button link="https://www.instagram.com/joseleandrovilela/" conteudo={<FaInstagram/>} estilo="redes" />

                        <Button link="https://www.linkedin.com/in/vilelajlr/" conteudo={<FaLinkedin/>} estilo="redes" />

                        <Button link="#" conteudo={<FaGithub/>} estilo="redes" />
                        
                        <div>
                            <Button link="/contato" conteudo="Entre em contato" estilo="contact" />
                        </div>
                    </div>
                </div>
                
                <div className={styles.img_portifolio}>
                    <img src={imgMinha} alt="Minha foto"  />
                </div>
                
            </div>
        </div>
    );
}