import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Olá, eu sou<br />
                    Paulo Chiaradia
                </h1>
                <p className={styles.description}>Possuo forte interesse por microcontroladores e análise de dados, sendo movido pela curiosidade em explorar novas tecnologias e soluções inovadoras.</p>    
                <a href="mailto:eu@paulochiaradia.com.br" className={styles.contactBtn}>Entre em Contato</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
}