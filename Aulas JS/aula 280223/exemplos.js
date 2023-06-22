// Aula 28.02
// Tópicos: forEach, map

let numeros = [1, 2, 3];

function mostrarValor(valor) {
  console.log(valor);
}

// for (let num of numeros) {
//   mostrarValor(num);
// }

// forEach
// Para cada elemento no array, executa a função
// numeros.forEach(mostrarValor);

numeros.forEach((numero) => {
  //   console.log(numero);
});

// Exercício: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.
let soma = 0;

numeros.forEach((numero) => {
  soma += numero;
});

// console.log(`A soma é ${soma}`);

let nomes = ["Pedro", "Paulo", "João", "Lucas"];
let nomesCaixaAlta = [];

// Transformando os nomes do array em Caixa Alta
nomes.forEach((nome) => {
  nomesCaixaAlta.push(nome.toUpperCase());
});

// Map = aplica transformação para cada elemento
// retornado, gera um novo array
let nomesCaixaAlta2 = nomes.map((nome) => {
  return nome.toUpperCase();
});
// console.log(nomes); // Array original
// console.log(nomesCaixaAlta2); // Array transformado

let nomesCaixaBaixa = nomes.map((nome) => {
  return nome.toLowerCase();
});

let nomesExclamacao = nomes.map((nome) => {
  return nome + "!";
});

// Parâmetro = generico, representa qualquer coisa
// Argumento = valor específico
let dados = [1, 2, 3, 4, 5];
let dadosPor100 = dados.map((dado) => {
  return dado * 100;
});

console.log(dadosPor100);

// Exercício I: Crie um array de palavras, para cada palavra
// verifique se o tamanho da palavra é menor que 5, se for transforme em BATATA
// Caso contrário retorne a palavra original em caixa alta.
let palavras = ["bootcamp", "soulcode", "fullstack", "js", "html"];
let palavras2 = palavras.map((palavra) => { // arrow -> o que será feito em cada elemento
  if (palavra.length < 5) {
    return "BATATA";
  } else {
    return palavra.toUpperCase();
  }
});

// Filter = Aplica um teste em cada elemento e quem passar faz parte do novo array
let temps = [29, 5, 10, -4, 15, -20];
let tempsPositiva = temps.filter((temp) => temp > 0);
console.log(tempsPositiva);