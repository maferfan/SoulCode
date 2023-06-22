
export function Mensagem() {
  const textoTitulo = "As batatas quando nascem se espalham pelo chão";
  const nomeAutor = "J. Almir";
  const caminhoImagem = "https://picsum.photos/200";

  return (
    <section className="mensagem">
      <h2 className="titulo">{textoTitulo.toUpperCase()}</h2>
      <img src={caminhoImagem} alt="img"/>
      <p className="paragrafo">Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Delegadis gente finis, bibendum egestas augue arcu ut est.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</p>
      <small>Esta frase foi criado por {nomeAutor}</small>
    </section>
  );
}