import styles from "./Button.module.css";

export function Button({text, link}){
    return (
        <a className={styles.linkButton} href={link}>{text}</a>
    );
}