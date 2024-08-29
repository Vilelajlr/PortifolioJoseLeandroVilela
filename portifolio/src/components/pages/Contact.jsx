import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import styles from "./modules/Contact.module.css";

import Button from "../layout/Button";

export default function Contact() {
  const maxLength = 2000;
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [showPopup, setShowPopup] = useState(false);

  const chacaracteres = maxLength - text.length;

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || text === '') {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Oculta o pop-up após 3 segundos
      return;
    }

    const templateParams = {
      from_name: name,
      message: text,
      email: email
    };

    emailjs
      .send("service_k38d5kd", "template_dhiodcr", templateParams, "cA80UXULxXT5_raIm")
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
            setShowPopup(true);
            const texto = 'Email enviado!';
            setTimeout(() => {
              setShowPopup(false);
            }, 3000); // Oculta o pop-up após 3 segundos
          setName('');
          setEmail('');
          setText('');
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  }

  return (
    <section className={styles.section_contact}>
      <h1 className={styles.txt_contact}>Entre em contato comigo!</h1>
      <div className={styles.flex_contact}>
        <div>
          <form onSubmit={sendEmail} className={styles.form_contact}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite o seu nome..."
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Digite o seu email..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className={styles.textarea_container}>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={maxLength}
                placeholder="Digite o seu texto aqui..."
              />
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
            <Button
              conteudo={<FaInstagram />}
              link="https://www.instagram.com/joseleandrovilela/"
              estilo="redes"
            />
            <Button
              conteudo={<FaLinkedin />}
              link="https://www.linkedin.com/in/vilelajlr/"
              estilo="redes"
            />
            <Button
              conteudo={<FaGithub />}
              link="https://github.com/Vilelajlr"
              estilo="redes"
            />
          </div>
          <p>Numero para contato!</p>
          <p>(34) 9 9940-1623</p>
          <div className={styles.curriculo}>
            <a href="https://www.linkedin.com/in/vilelajlr/">Baixe meu curriculo!</a>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className={styles.popup}>
          {texto}
        </div>
      )}
    </section>
  );
}
