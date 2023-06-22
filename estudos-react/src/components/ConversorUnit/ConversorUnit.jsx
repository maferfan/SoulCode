import { useEffect, useState } from "react"
import "./ConversorUnit.css"

export function ConversorUnit() {
    let [m, setM] = useState(0)
    let [mm, setMM] = useState(0)
    let [cm, setCM] = useState(0)
    let [km, setKM] = useState(0)

    useEffect(() => {
        const milimiters = (m * 1000)
        const centimeters = (m * 100)
        const kilometers = (m / 1000)
        setMM(milimiters)
        setCM(centimeters)
        setKM(kilometers)

    }, [m])

    return (
        <div className="container">
            <input type="number" value={m} placeholder="Digite a distância em metros" onChange={(e) => setM(e.target.value)} />
            <p>em mm: {mm}</p>
            <p>em cm: {cm}</p>
            <p>em km: {km}</p>
        </div>
    )
}