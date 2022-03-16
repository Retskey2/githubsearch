import React from 'react';
import styles from "./style.module.scss"
import light from "../../image/sun.svg";

function Header() {
    return (
        <div className={styles.header}>
            git&search
            <div className={styles.toggleLight}>
                light
                <img src={light} alt="light"/>
            </div>
        </div>
    );
}

export default Header;