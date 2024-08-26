import React from "react";

import styles from "./modules/Button.module.css";

export default function ButtonEntreEmContato({link, conteudo, estilo}){


    return(
        <a href={link} target="_blank" rel="noreferrer" className={`${styles[estilo]}`}>{conteudo}</a>
    );
}