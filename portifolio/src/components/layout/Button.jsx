import React from "react";

import styles from "./modules/Button.module.css";

export default function ButtonEntreEmContato({link, conteudo, estilo}){


    return(
        <a href={link} className={`${styles[estilo]}`}>{conteudo}</a>
    );
}