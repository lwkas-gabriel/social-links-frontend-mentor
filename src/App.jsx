import { Button } from "./components/Button";
import { operations } from "./constants/operationConstants";
import image from "./assets/avatar-jessica.jpeg";

import styles from './App.module.css'

export function App() {
  return (
    <main className={styles.container}>
      <img className={styles.avatar} src={image} />
        <h1 className={styles.name}>Jessica Randall</h1>
        <p className={styles.description}>London, Unite Kingdom</p>
        <span className={styles.habits}>&#34;Front-end developer avid reader&#34;</span>
        
        <section  className={styles.buttonContainer}>
          {operations.map((op) => {
              return (<Button key={op.id} text={op.text} link={op.link}/>)
          })}
        </section>
    </main>
  );
}