import "./Product.css";

export function Product({ image, title, description }) {
  return (
    <div className="product">
      <img src={image} alt="Imagem do produto" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button type="button" id="button">Comprar</button>
    </div>
  );
}