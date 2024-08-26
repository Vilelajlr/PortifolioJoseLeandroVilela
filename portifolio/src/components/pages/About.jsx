import React from "react";

import styles from "./modules/About.module.css";

export default function About() {
    return(
        <section className={styles.flex} >
                <div className={styles.max_width}>
                    <div>
                        <h1>Sobre mim</h1>
                    </div>
                    <div>
                        <p>
                            Meu nome é <strong>José Leandro</strong>, sou desenvolvedor web. Atualmente curso Análise e Desenvolvimento de Sistemas na Faculdade Unicesumar e Sistemas de informação na Universidade Federal de Uberlândia (UFU).
                        </p>
                        <p>
                            Sou apaixonado por tecnologia e por isso estou sempre buscando aprender coisas novas, me aperfeiçoar e me manter atualizado com o mercado. Tenho conhecimento em diversas tecnologias, como HTML, CSS, JavaScript, React, Node, Java, Python, C, entre outras.
                        </p>
                        <p>
                            Estou sempre disposto a ajudar e a aprender coisas novas,  por isso estou sempre em busca de novos desafios e oportunidades. Se você tem um projeto ou uma ideia e precisa de um desenvolvedor, entre em contato comigo, ficarei feliz em te ajudar.
                        </p>
                    </div>
                </div>

        </section>
    );
}