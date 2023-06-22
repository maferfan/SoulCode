import { Product } from "../Product/Product";
import img1 from "../../assets/images/taylor1.jpeg";
import img2 from "../../assets/images/taylor2.jpeg";
import img3 from "../../assets/images/taylor3.jpeg";
import img4 from "../../assets/images/taylor4.jpeg";
import img5 from "../../assets/images/taylor5.jpeg";

export function ProductList() {
  return (
    <>
      <Product image={img1} title="Speak Now" description="O álbum Speak Now foi o primeiro totalmente escrito por Taylor" />
      <Product image={img2} title="Red" description="A partir de Red, Taylor começou a entrar mais no universo pop" />
      <Product image={img3} title="1989 " description="1989 foi o primeiro trabalho oficialmente pop da cantora" />
      <Product image={img4} title="Lover" description="You Need To Calm Down e Lover." />
      <Product image={img5} title="Reputation" description="O primeiro single de Reputation foi Look What You Made Me Do" />
    </>
  );
};