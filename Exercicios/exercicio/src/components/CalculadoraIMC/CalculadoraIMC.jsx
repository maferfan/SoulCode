import { useState } from "react"
import "./Calculadora.css"


export function CalculadoraIMC(){
     // imc = altura/peso**2
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState(0)


    return (<div className="container">
        <input type="number" placeholder="Peso" onChange={(e) => setPeso(e.target.value)}/>
        <br/>
        <input type="number" placeholder="Altura" onChange={(e) => setAltura(e.target.value)} />
        <br/>
        <button onClick={() => setImc(peso/altura**2)}>Calcular</button>
        <h1>{imc.toFixed(2)}</h1>
    </div>)
}