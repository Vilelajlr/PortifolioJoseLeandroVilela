import React, {useState} from "react";
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";

import styles from "./modules/Contact.module.css";

import Button from "../layout/Button";

export default function Contact() {

    const maxLength = 2000;
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const chacaracteres = maxLength - text.length


    return (
        <section className={styles.section_contact}>
            
                <h1 className={styles.txt_contact}>Contact Me!</h1>
                <div className={styles.flex_contact}>
                    <div>
                        <form action="post" className={styles.form_contact}>
                            <input type="text" name="name" id="name" placeholder="Digite o seu nome..." />
                            <input type="text" name="email" id="email" placeholder="Digite o seu email..." />
                            <div className={styles.textarea_container}>
                                <textarea name="message" id="message" cols="30" rows="10" value={text} onChange={handleChange} maxLength={maxLength} placeholder="Digite o seu texto aqui..." />
                                <p>{chacaracteres}/{maxLength}</p>
                
                            </div>
                            <div className={styles.buttons}>
                                <button type="submit" className={styles.btn_contact}>Enviar</button>
                                <button type="reset" className={styles.btn_contact}>Limpar</button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.infos_contact}>
                        <p>Redes Sociais</p>
                        <div className={styles.redes}>
                            <Button conteudo={<FaInstagram />} link="https://www.instagram.com/joseleandrovilela/" estilo="redes"  />
                            <Button conteudo={<FaLinkedin />} link="https://www.linkedin.com/in/vilelajlr/" estilo="redes" />
                            <Button conteudo={<FaGithub />}  link="https://github.com/Vilelajlr" estilo="redes" />
                        </div>
                        <p>Numero para contato!</p>
                        <p>(34) 9 9940-1623</p>
                        <div className={styles.curriculo}>
                            <a href="#">Baixe meu curriculo!</a>
                        </div>
                    </div>
                </div>
            
        </section>
    );
}