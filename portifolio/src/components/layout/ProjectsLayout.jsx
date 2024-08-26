import React from 'react';

import styles from './modules/ProjectsLayout.module.css';

export default function ProjectsLayout({ nome, imagem, link }) {

   const url = () =>{
        window.open(link, '_blank');    
   }


  return (
      <div className={styles.principal} onClick={url}>
          <div className={styles.size}>
            <img src={imagem} alt="Imagens Projetos" className={styles.img} />
            <div className={styles.txt}>
              <h2>{nome}</h2>
            </div>
          </div>
      </div>
  );
}
