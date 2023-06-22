import "./Distancia.css";
import { useState, useEffect } from "react";

export function Distancia() {

  const [metros, setMetros] = useState(0);
  const [milimetros, setMilimetros] = useState(0);
  const [centimetros, setCentimetros] = useState(0);
  const [quilometros, setQuilometros] = useState(0);

  useEffect(() => {
    const mm = Number(metros) * 1000;
    const cm = Number(metros) * 100;
    const km = Number(metros) / 1000;
    setMilimetros(mm);
    setCentimetros(cm);
    setQuilometros(km);
  }, [metros])

  return (
    <div className="distancia ">
      <input type="range" max={1000} placeholder="Distância em metros" onChange={(e) => setMetros(e.target.value)} value={metros} />
      {metros}m
      <hr />
      <p>Valor em mm: {milimetros}</p>
      <p>Valor em cm: {centimetros}</p>
      <p>Valor em km: {quilometros}</p>
    </div>
  )
}