import React, {useState} from "react";
import styles from "./navbar.module.css";

import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portifolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} 
                src={isMenuOpen? getImageUrl("nav/closeIcon.png"):getImageUrl("nav/menuIcon.png")} 
                alt="menu-button" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                <ul className={`${styles.menuItens} ${isMenuOpen && styles.menuItensOpen}`}
                onClick={() => setIsMenuOpen(false)}>
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
