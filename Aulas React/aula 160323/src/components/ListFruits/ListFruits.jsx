import "./ListFruits.css"
import { useState } from "react"
import { frutas } from "../../data/frutas"

export function ListFruits() {

  //   let [name, setNome] = useState("")
  //   let [img, setImg] = useState("")

  //   function procurar(e) {
  //     setNome(e.target.value);
  //     setImg("")
  //     frutas.map((fruta) => {
  //       console.log(name)
  //       if (fruta.nome.toLowerCase().includes(name.toLowerCase())) {

  //         if (img == "") {
  //           setImg(<img src={fruta.imagem}></img>)
  //         }
  //         else {
  //           setImg({ img } + <br /> + <img src={fruta.imagem}></img>)

  //         }
  //       }
  //     })
  //   }

  let [frutaImagem, setfrutaImagem] = useState([]);
  let vetorFotos = [];

  function buscar(e) {
    vetorFotos = [];
    frutaImagem = []
    frutas.map((fruta) => {
      if (fruta.nome.toLowerCase().includes(e.target.value.toLowerCase())) {
        console.log(fruta)
        vetorFotos.push(<img key={fruta.nome} src={fruta.imagem}></img>);
      }
    })
    setfrutaImagem([vetorFotos])
  }

  return (
    <div >
      <div className="divInput" >
        <input type="text" onChange={buscar} className="inputFruta" />
      </div>
      <div className="foto">
        {frutaImagem}
      </div>
    </div>
  )
}