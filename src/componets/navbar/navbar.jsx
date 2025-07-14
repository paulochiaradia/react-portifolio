import React from "react";
import styles from "./navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portifolio</a>
            <div className={styles.menu}>
                <ul className={styles.menuItens}>
                    <li>
                        <a href="#about">Sobre Mim</a>
                    </li>
                    <li>
                        <a href="#experience">Experiência</a>
                    </li>
                    <li>
                        <a href="#projects">Projetos</a>
                    </li>
                    <li>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
