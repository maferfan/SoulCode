import { useState } from "react";
import './Sorteio.css'

export function Sorteio() {

  let [num, setNum] = useState(0);
  console.log("Componente reconstruiu " + new Date().toISOString());
  return (
    <div className="sorteio">
      <p style={(num !== 0) ? (num % 2 === 0) ? { borderColor: "green" } : { borderColor: "yellow" } : { borderColor: "black" }}>{num}</p>
      <button onClick={() => setNum(Math.floor(Math.random() * 100))}>Sortear</button>
    </div>
  )
}