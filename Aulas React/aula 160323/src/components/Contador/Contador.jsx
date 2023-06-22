import "./Contador.css"
import { useState } from "react"; // useState -> função do react

export function Contador() {
  //useState é uma função que cria um estado
  //estado é uma variável especial que sincroniza as mudanças na página
  //indice 0 -> estado
  //indice 1 -> função que muda o estado
  // const array = useState(0)//retorna um array (tem apenas 2 posições)
  // var numero = array[0];
  // let setNumero = array[1];

  let [numero, setNumero] = useState(100);

  //soma
  function incrimentar1() {
    setNumero(numero + 1);
  }
  function incrimentar10() {
    setNumero(numero + 10);
  }
  function incrimentar100() {
    setNumero(numero + 100);
  }
  //divisão
  function decrementar1() {
    setNumero(numero - 1);
  }
  function decrementar5() {
    setNumero(numero - 5);
  }
  function decrementar50() {
    setNumero(numero - 50);
  }
  //multiplicação
  function multiplicar3() {
    setNumero(numero * 3);
  }
  //divisão
  function dividir2() {
    setNumero(numero / 2);
  }


  return (
    <div className="calc">
      <h1>{numero}</h1>
      <div>
        <button onClick={incrimentar1}>+1</button>
        <button onClick={decrementar1}>-1</button>
        <button onClick={incrimentar10}>+10</button>
        <button onClick={incrimentar100}>+100</button>
        <button onClick={multiplicar3}>*3</button>
        <button onClick={dividir2}>/2</button>
        <button onClick={decrementar50}>-50</button>
        <button onClick={decrementar5}>-5</button>
        <button className="limpar" onClick={() => setNumero(0)}>limpar</button>
      </div>
    </div>
  );
};


