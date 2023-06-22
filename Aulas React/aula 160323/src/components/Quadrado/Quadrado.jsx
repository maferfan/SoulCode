import "./Quadrado.css"


function clicou() {

  // alert("clicou")
}


function quandoMauseEntrar(event) {
  const quadrado = event.target;
  quadrado.style.backgroundColor = "red";
  event.target.style.borderColor = " green"
}

function quandoMauseSair(event) {
  const quadrado = event.target;
  quadrado.style.backgroundColor = "blue";
  quadrado.style.borderColor = "black"
}

function clicouEClicou(e) {
  e.target.style.backgroundColor = "orange";
  e.target.style.border = "2px solid green"
}

export function Quadrado() {
  return (
    <div className="quadrado" onClick={clicou} onMouseEnter={quandoMauseEntrar} onMouseLeave={quandoMauseSair} onDoubleClick={clicouEClicou}>

    </div >
  );
};