export function Impar({ numero }) {

  return (
    <>
      <h1>Impar ou par: </h1>
      <h3></h3>
      <h2>
        {(numero % 2 == 0) ? "Par" : "Impar"}
      </h2>
    </>
  );
}