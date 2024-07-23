import styles from "./Button.module.css";

export function Button({link, text}){
    return (
        <a className={styles.linkButton} href={link}>{text}</a>
    );
}