import { useEffect, useState } from "react"
import "./ConversorTemp.css"

export function ConversorTemp(){
    const [tempC, setTempC] = useState(0)
    const [tempF, setTempF] = useState(0)
    const [tempK, setTempK] = useState(0)

    useEffect(() => {
        const K = Number(tempC) + 273
        const F = Number(tempC)*1.8 + 32
        setTempK(K)
        setTempF(F)
    }, [tempC])
return(
    <div>
        <input type="number" placeholder="temperatura" onChange={(ev) => setTempC(ev.target.value)}/>
    <p>Valor em celsius: {tempC}</p>
    <p>Valor em fahrenheit: {tempF}</p>
    <p>Valor em Kelvin: {tempK}</p>
    </div>
    )
}