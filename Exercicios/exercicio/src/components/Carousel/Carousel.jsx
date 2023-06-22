import "./Carousel.css"
import image1 from "../Images/Abacate.jpg"
import image2 from "../Images/Abacaxi.jpg"
import image3 from "../Images/Banana.jpg"
import image4 from "../Images/Maçã.jpg"
import { useState } from "react"

const images = [
    { nome: image1 },
    { nome: image2 },
    { nome: image3 },
    { nome: image4 },
]

export function Carousel() {

    let [i, setI] = useState(0)
    const imagesShow = images.map((i, index) => <div key={index}> <img src={i.nome} /></div>)

    return (
        <div className="container">
            <button onClick={() => setI(i <= 0 ? images.length - 1 : i - 1)}>{`<`}</button>
            <small>{imagesShow[i]}</small>
            <button onClick={() => setI(i >= images.length - 1 ? 0 : i + 1)}>{`>`}</button>
        </div>
    )
}

