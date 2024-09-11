import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import styles from "./modules/Contact.module.css";

import Button from "../layout/Button";


import dowloadCurriculo from "../dowload/curriculoJoseVilela.pdf"

export default function Contact() {
  const maxLength = 2000;
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [texto, setTexto] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupStyle, setPopupStyle] = useState(''); // Novo estado para o estilo do pop-up

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const chacaracteres = maxLength - text.length;

  function limparCampos(e){
    e.preventDefault();
    setName('');
    setEmail('');
    setText('');
  }

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || text === '') {
      setShowPopup(true);
      setTexto('Preencha todos os campos!');
      setPopupStyle(styles.error); // Define o estilo de erro
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Oculta o pop-up após 3 segundos
      return;
    }else if(email !== '' && !emailRegex.test(email)){
        setShowPopup(true);
        setTexto('Email inválido!');
        setPopupStyle(styles.error); // Define o estilo de erro
        setTimeout(() => {
          setShowPopup(false);
        }, 3000); // Oculta o pop-up após 3 segundos
        return;
    }


    const templateParams = {
      from_name: name,
      message: text,
      email: email,
    };

    emailjs
      .send("service_k38d5kd", "template_dhiodcr", templateParams, "cA80UXULxXT5_raIm")
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setShowPopup(true);
          setTexto('Email enviado com sucesso!');
          setPopupStyle(styles.success); // Define o estilo de sucesso
          setTimeout(() => {
            setShowPopup(false);
          }, 3000); // Oculta o pop-up após 3 segundos
          setName('');
          setEmail('');
          setText('');
        },
        (error) => {
          console.log('FAILED...', error);
          setShowPopup(true);
          setTexto('Falha ao enviar o email.');
          setPopupStyle(styles.error); // Define o estilo de erro
          setTimeout(() => {
            setShowPopup(false);
          }, 3000); // Oculta o pop-up após 3 segundos
        }
      );
  }

  return (
    <section className={styles.section_contact}>
      <h1 className={styles.txt_contact}  data-aos="fade-right">Entre em contato comigo!</h1>
      <div className={styles.flex_contact}>
        <div>
        
          <form onSubmit={sendEmail} data-aos="fade-up" className={styles.form_contact}>
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
              <button onClick={limparCampos} className={styles.btn_contact}>Limpar</button>
            </div>
          </form>
        </div>
        <div className={styles.infos_contact} data-aos="fade-left">
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
            <a href={dowloadCurriculo} download={dowloadCurriculo}>Baixe meu curriculo!</a>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className={`${styles.popup} ${popupStyle}`}>
          {texto}
        </div>
      )}
    </section>
  );
}
