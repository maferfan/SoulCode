import { useEffect, useState } from "react";
import "./Desafio1.css";

export function Desafio1() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  // -1 indica que não houve calculo
  const [imc, setImc] = useState(0);

  useEffect(() => {
    setImc((peso) / (altura * altura))
  }, [altura, peso])

  function limpar() {
    setPeso(0);
    setAltura(0);
    setImc(-1);
  }

  return (
    <div>
      <h3>Calculadora de IMC</h3>
      <input
        type="number"
        placeholder="Digite o peso"
        onChange={(evento) => setPeso(evento.target.value)}
        value={peso}
      />
      <input
        type="number"
        placeholder="Digite a altura"
        onChange={(evento) => setAltura(evento.target.value)}
        value={altura}
      />
      <br />
      <button onClick={limpar}>Limpar</button>
      <hr />
      <p>O imc é de: {isFinite(imc) && imc > 0 ? imc.toFixed(2) : 0}</p>
    </div>
  );
}

// Capturando dados do input

// - onChange
// - Função para coletar o valor
// - Estado pra armazenar
