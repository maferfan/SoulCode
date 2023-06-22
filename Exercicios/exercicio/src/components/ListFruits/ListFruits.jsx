import "./ListFruits.css"
import image1 from "../Images/Abacate.jpg"
import image2 from "../Images/Abacaxi.jpg"
import image3 from "../Images/Banana.jpg"
import image4 from "../Images/Maçã.jpg"
import { useState } from "react"

const frutas = [
    { nome: "Abacate", imagem: image1 },
    { nome: "Abacaxi", imagem: image2 },
    { nome: "Banana", imagem: image3 },
    { nome: "Maçã", imagem: image4 }
];

export function ListFruits() {

    let [busca, setBusca] = useState("")

    const frutasFilter = frutas.filter((fruta) => fruta.nome.toLowerCase().includes(busca.toLowerCase()))

    function Busca(e) {
        setBusca(e.target.value)
    }

    return (
        <div className="container">
            <h1>Escolha a fruta:</h1>
            <input type="text" onChange={Busca} />
            <div className="frutas">
                {frutasFilter.map((fruta, index) => (
                    <div key={index} className="fruta">
                        <img src={fruta.imagem} />
                        <div className="nome">{fruta.nome}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}