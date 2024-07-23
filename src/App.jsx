import { Button } from "./components/Button";
import { operations } from "./constants/operationConstants";
import image from "./assets/avatar-jessica.jpeg";

import './App.module.css'

export function App() {
  return (
    <main>
      <img src={image} />
        <h1>Jessica Randall</h1>
        <p>London, Unite Kingdom</p>
        <span>&#34;Front-end developer avid reader&#34;</span>
        
        <section>
          {operations.map((op) => {
              return (<Button key={op.id} text={op.text} link={op.link}/>)
          })}
        </section>
    </main>
  );
}