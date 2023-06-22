import "./ListaCompras.css"

const compras = ["Batata palha", "Batata frita", "Batata doce", "Batata chips"];

const produtos = [
  { cod: 1, nome: 'Batata palha', quantidade: 5, precoUnitario: 5.5 },
  { cod: 2, nome: 'Batata frita pronta', quantidade: 3, precoUnitario: 10.5 },
  { cod: 3, nome: 'Batata doce', quantidade: 10, precoUnitario: 20 },
  { cod: 4, nome: 'Batata chips', quantidade: 5, precoUnitario: 15 },
];

export function ListaCompras() {
  const produto = produtos.map((produto) => {
    return (
      <div className="cardCompras" key={produto.cod}>
        <h2 className="cardItems">{produto.nome}</h2>
        <p className="cardItems">Quantidate: {produto.quantidade}</p>
        <p className="cardItems">Subtotal: R$ {(produto.precoUnitario * produto.quantidade).toFixed(2)}</p>

      </div>
    )
  });
  const elementosCompras = compras.map((nomeElemento, index) => {
    return <li key={index}>{nomeElemento}</li>
  });
  return (
    <>
      <h2>Lista de compras</h2>
      <ul>
        {elementosCompras}
      </ul>
      <hr />
      <div className="cardContainer">
        {produto}
      </div>
    </>
  );
}