import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./about.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre Mim</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Design de Hardware e Sensores</h3>
              <p>
                Crio a base física de projetos inteligentes, projetando circuitos que servem como a
                espinha dorsal para sensores e dispositivos conectados.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/server.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Programação de Sistemas Embarcados</h3>
              <p>
                Atuo como o elo entre o hardware e o software, programando microcontroladores para
                gerenciar tarefas e transmitir dados de forma confiável.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ckt.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Arquitetura de Backend e APIs</h3>
              <p>
                Desenvolvo toda a infraestrutura de servidor para a solução IoT. Crio as APIs que permitem a comunicação, o banco de dados que armazena as
                informações e a lógica de negócio no lado do servidor.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ckt.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Science Aplicado à Engenharia</h3>
              <p>
                Utilizo a análise de dados para extrair o máximo de valor da informação, desenvolvendo dashboards e modelos que permitem
                monitorar e otimizar o sistema como um todo
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};