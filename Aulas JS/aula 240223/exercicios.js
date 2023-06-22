// Exercício I: Crie uma função que recebe 2 números e um operador (+, -, *, /)
// e faça a operação indicada entre os 2 números. Não tem retorno.

function op (n1, n2, operador) {
  switch (operador){
    case '+':
      console.log(`${n1} ${operador} ${n2} = ${n1+n2}`);
      break;
    case '-':
      console.log(`${n1} ${operador} ${n2} = ${n1-n2}`);
      break;
    case '*':
      console.log(`${n1} ${operador} ${n2} = ${n1*n2}`);
      break;
    case '/':
      console.log(`${n1} ${operador} ${n2} = ${n1/n2}`);
      break;      
    default: console.log("operador não definido.");  
  }
}
op(53,33,'*');

// Exercício II: Crie uma função que converte celsius em fahrenheit
// C = (F - 32) / 1.8
// Em seguida crie uma outra função (checarTemperatura) que recebe uma temperatura 
// como parâmetro:
// Caso esteja abaixo de 10: "Muito frio!"
// Esteja entre 11 e 15: "Clima bom!"
// Esteja entre 16 e 30: "Agradável..."
// Seja maior que 30: "Hell"

function fahrenheitCelsius (f) {
  let c = (f - 32) / 1.8;
  printTemp(c);
}
function printTemp (c) {
  if (c < 11) {
    console.log("Muito frio!");
  }
  else if (c < 16) {
    console.log("Clima bom!");
  } 
  else if (c < 31) {
    console.log("Agradável...");
  }
  else {
    console.log("Hell");
  }
}
celsiusFahrenheit(80);

// Exercício: Transforme as funções abaixo em arrow
const criarNomeCompleto = (nome, sobrenome) => nome + " " + sobrenome; //retorno imediato 

const contar = (maximo) => {
  for (let i = 1; i <= maximo; i++) {
    console.log(i);
  }
}
const imc = (peso, altura) => {
  let calculo = peso / (altura * altura);
  console.log(`O IMC é ${calculo}`);
  return calculo;
}