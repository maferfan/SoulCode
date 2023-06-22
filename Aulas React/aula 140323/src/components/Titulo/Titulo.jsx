import "./Titulo.css"
// Titulo é o nome do componente
// Componente de função
export function Titulo(props) {

  const textoTitulo = props.children;

  let objectStyle = {
    backgroundColor: props.bgColor, //background-color
    borderLeftColor: props.borderColor //border-left-color
  }

  // A parte "visual" do componente
  return <h1 class="titulo" style={objectStyle}>{textoTitulo}</h1>;
}

// export function Titulo({borderLeftColor, backgroundColor, children}) {
//   return (
//     <h1 className="titulo" style={{borderLeftColor, backgroundColor}}>
//       {children}
//     </h1>
//   );
// }
