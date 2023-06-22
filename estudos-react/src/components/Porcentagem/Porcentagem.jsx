import { useEffect, useState } from "react"


export function Porcentagem(){
    let [valor, setValor] = useState(0)
    let [porc, setPorc] = useState(0)
    let [resultado, setResultado] = useState(0)

    useEffect(() =>{
        setResultado(valor*(porc/100))
    },[valor, porc])

    return(<div>
        <input type="number" placeholder="Digite o valor" value={valor} onChange={(e) => setValor(e.target.value)}/>
        <input type="number" placeholder="Digite a porcentagem" value={porc} onChange={(e) => setPorc(e.target.value)}/>
        <hr />
        <p>O valor percentual é de: {resultado}</p>
</div>)
}