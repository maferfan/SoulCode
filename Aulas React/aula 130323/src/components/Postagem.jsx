import { Titulo } from "./Titulo"
import { Button } from "./Button"
export function Postagem () {
  return ( 
    <section className="card">
        <img src="https://picsum.photos/200" alt="img"/>
        <Titulo/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, porro! Tempore, impedit! Error ab consequuntur veniam labore sequi in itaque.</p>
        <div className="button-container">
          <Button/>
        </div>
    </section>
  )
}