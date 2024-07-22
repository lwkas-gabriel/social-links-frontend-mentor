import { Button } from "./components/Button";
import { operations } from "./constants/operationConstants";
import image from "./assets/avatar-jessica.jpeg";

import './App.module.css'

export function App() {
  return (
    <main>
      <img src={image} alt="" />
        <h1>Jessica Randall</h1>
        <p>London, Unite Kingdom</p>
        <span>"Front-end developer avid reader."</span>
        
        <section>
          <Button text={operations[0].text} link={operations[0].link}/>
          <Button text={operations[1].text} link={operations[1].link}/>
          <Button text={operations[2].text} link={operations[2].link}/>
          <Button text={operations[3].text} link={operations[3].link}/>
          <Button text={operations[4].text} link={operations[4].link}/>
        </section>
    </main>
  );
}