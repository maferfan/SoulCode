import { useEffect, useState } from "react";
import "./Porcentagem.css";

export function Porcentagem() {

  const [valor, setValor] = useState('');
  const [percentual, setPercentual] = useState('');
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    const aux = valor / 100 * percentual;
    setResultado(aux);
  }, [valor, percentual])

  return (
    <div className="porcentagem">
      <input type="number" placeholder="valor" onChange={(e) => setValor(e.target.value)} value={valor} />
      <input type="number" placeholder="percentual" max={100} onChange={(e) => setPercentual(e.target.value)} value={percentual} />
      <br />
      {resultado !== 0 && <h3>Resultado: {resultado.toFixed(2)}</h3>}
    </div>
  )
}