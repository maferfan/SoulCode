import imgTaylor1 from "../../assets/images/taylor1.jpeg";
import imgTaylor2 from "../../assets/images/taylor2.jpeg";
import imgTaylor3 from "../../assets/images/taylor3.jpeg";
import imgTaylor4 from "../../assets/images/taylor4.jpeg";
import imgTaylor5 from "../../assets/images/taylor5.jpeg";
import { Product } from "../Product/Product";
import "./ProductList.css"

export function ProductList() {
  return (
    <div class="productList">
      <Product image={imgTaylor1} title="Speak Now" description="O álbum Speak Now foi o primeiro totalmente escrito por Taylor"></Product>
      <Product image={imgTaylor2} title="Red" description="A partir de Red, Taylor começou a entrar mais no universo pop"></Product>
      <Product image={imgTaylor3} title="1989 " description="1989 foi o primeiro trabalho oficialmente pop da cantora"></Product>
      <Product image={imgTaylor4} title="Lover" description="You Need To Calm Down e Lover."></Product>
      <Product image={imgTaylor5} title="Reputation " description="O primeiro single de Reputation foi Look What You Made Me Do"></Product>
    </div>
  );
}