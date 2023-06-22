import "./ListFruits.css"
import { useState } from "react"
import { frutas } from "../../data/frutas"



export function ListFruits() {

  let [resultados, setResultados] = useState([]);
  function filtrar(e) {
    const busca = frutas.filter((fruta) => (fruta.nome.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1));
    setResultados(busca)
  }

  return (
    <div className="frutas">
      <input type="text" onChange={filtrar} />
      <br />
      <ul>
        {resultados.map(fruta => <li><img src={fruta.imagem} alt={fruta.nome} /></li>)}
      </ul>
    </div>
  )
}