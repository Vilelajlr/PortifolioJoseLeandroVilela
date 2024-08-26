import React from "react";
import {FaHtml5, FaCss3, FaReact, FaJs, FaSass, FaGithub } from "react-icons/fa";

import portfolio from "../imgs/portifolioVilela.png";
import relogio from "../imgs/relogioDA.png";
import lpVilela from "../imgs/landingPageVilela.png";

import ProjectsLayout from "../layout/ProjectsLayout";


import styles from "./modules/Projects.module.css";

export default function Projects(){

    const mapProjects = [
        {
            nome: "Portfolio",
            imagem: portfolio,
            link: "https://joseleandrovilela.vercel.app/",
            icons: [<FaHtml5 key="html5" />, <FaCss3 key="css" />, <FaReact key="react" />, <FaJs key="js" />]
        },
        {
            nome: "Relogio Digital/Analógico",
            imagem: relogio,
            link: "https://vilelajlr.github.io/ProjetoRelogioAnalogico/index.html",
            icons: [<FaHtml5 key="html5" />, <FaCss3 key="css" />, <FaJs key="js" />]
        },
        {
            nome: "Landing Page Barbearia",
            imagem: lpVilela,
            link: "https://vilelacodelpbarber.vercel.app/",
            icons: [<FaHtml5 key="html5" />, <FaCss3 key="css" />, <FaJs key="js" />, <FaSass key="sass" />]
        }
    ]


    return(
        <section className={styles.section}>
            <h1>Projetos</h1>
            <div className={styles.max_width}>

                {mapProjects.map((project, index) => (
                    <div className={styles.principal}
                        key={index}
                    >
                    <ProjectsLayout nome={project.nome} imagem={project.imagem} link={project.link} />
                    
                    <div className={styles.icons}>
                        <div className={styles.ic}>
                            {project.icons}

                            

                        </div>

                        <div className={styles.github}>
                                <button onClick={ 
                                    () => window.open(project.github, "_blank")
                                 }>
                                    <abbr title="Ver projeto no github">
                                        <FaGithub />
                                    </abbr>
                                </button>
                        </div>
                        
                    </div>
                </div>   
                ))}
               
            </div>
        </section>
        

    );
}