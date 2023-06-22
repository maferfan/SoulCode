import { useEffect, useState } from "react";
import "./ConversorTemp.css";

// Efeitos = ações secundárias 

export function ConversorTemp() {
  const [tempC, setTempC] = useState(0);
  const [tempF, setTempF] = useState(0);
  const [tempK, setTempK] = useState(0);

  // Quando tempC for alterada essa função / efeito será executada automaticamente 
  useEffect(() => {
    const f = Number(tempC) * 1.8 + 32;
    const k = Number(tempC) + 273.15;
    setTempF(f);
    setTempK(k);
  }, [tempC])

  return (
    <div>
      <input type="number" placeholder="Temperatura em C" onChange={(e) => setTempC(e.target.value)} />
      <p>Valor digitado: {tempC} °C</p>

      <p>Valor digitado: {tempF} °F</p>

      <p>Valor digitado: {tempK} °K</p>

    </div>
  )
}