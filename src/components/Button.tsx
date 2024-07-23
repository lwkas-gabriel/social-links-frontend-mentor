import React from "react";
import styles from "./Button.module.css";

interface ButtonProps{
    text: string;
    link: string;
}

export function Button({text, link}: ButtonProps){
    return (
        <a className={styles.linkButton} href={link}>{text}</a>
    );
}