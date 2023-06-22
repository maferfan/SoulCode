import "./Desafio2.css"
import { useState } from "react"

const slides = [
  {
    imagem:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    titulo: 'Aproveite cada segundo',
  },
  {
    imagem:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    titulo: 'Respire e inspire',
  },
  {
    imagem:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80',
    titulo: 'Valorize a vida',
  },
  {
    imagem:
      'https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    titulo: 'Esteja com quem te faz bem',
  },
];

export function Desafio2() {
  const [indexAtual, setIndexAtual] = useState(0);

  function avancar() {
    (indexAtual < slides.length - 1) ? setIndexAtual(indexAtual + 1) : setIndexAtual(0);
  }
  function voltar() {
    (indexAtual !== 0) ? setIndexAtual(indexAtual - 1) : setIndexAtual(slides.length - 1);
  }

  return (
    <div className="carrossel">
      <img src={slides[indexAtual].imagem} alt="imagem carrossel" />
      <p>{slides[indexAtual].titulo}</p>
      <div className="controles">
        <button onClick={voltar}>{"<"}</button>
        <button onClick={avancar}>{">"}</button>
      </div>
    </div>
  )
}