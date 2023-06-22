import "./CalculadoraIMC.css";
import { useState } from "react";

export function CalculadoraIMC() {

  let peso = 0;
  let altura = 0;
  const [resultado, setResultado] = useState('');

  function calcular() {
    let imc = peso / (altura * altura);
    let msg = '';
    if (imc < 18.5) {
      msg = "Abaixo do peso. ";
    }
    else if (imc <= 24.9) {
      msg = "Peso normal. ";
    }
    else if (imc <= 29.9) {
      msg = "Sobrepeso. ";
    }
    else if (imc <= 34.9) {
      msg = "Obesidade grau 1. ";
    }
    else if (imc <= 39.9) {
      msg = "Obesidade grau 2. ";
    }
    else {
      msg = "Obesidade grau 3 ou mórbida. ";
    }
    setResultado(msg + "IMC = " + imc.toFixed(2))
  }

  return (
    <div className="calculadoraIMC">
      <h1>Calcular IMC</h1>
      <label htmlFor="peso">Peso:</label>
      <input type="number" id="peso" onChange={(e) => peso = e.target.value} />
      <label htmlFor="altura">Altura:</label>
      <input type="number" id="altura" onChange={(e) => altura = e.target.value} />
      <button onClick={calcular}>Calcular</button>
      <h3>{resultado}</h3>
    </div >
  );
};