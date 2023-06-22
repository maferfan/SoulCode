// Aula 23.02
// Tópicos: funções

// Função = procedimento = método

// Sintaxe básica

function dizOla () { //declaração de função
  console.log("Olá");
}

dizOla();

function exemplo01 () {
  let a = 5;
  let b = 10;
  console.log(`A soma é ${a + b}`);
}

exemplo01();

let num1 = 3;
let num2 = 5;

function exemplo02 () {
  console.log(`A soma é ${num1 + num2}`);
}

exemplo02();

num1 = 10;
num2 = 15;

exemplo02();

//Parâmetros = entrada = o que a função precisa para executar || Informação dinâmica

function soma (a, b) { // a & b são parâmetros
  console.log(`A soma de ${a} + ${b} é = ${a+b}`);
} 

soma(20, 10);
soma(3, 1);
soma(40, 80);
soma(2, 17);


function calculadora (a, b, c) {
  console.log(`Soma = ${a+b+c}`);
  console.log(`Subtração = ${a-b-c}`);
  console.log(`Multiplicação = ${a*b*c}`);
  console.log(`Divisão = ${a/b/c}`);
}

calculadora(20, 30, 2);

// Chamada?
// calculadora(10, 5, 2);
let numero1 = 50;
let numero2 = 25;
let numero3 = 40;
// calculadora(numero1, numero2, numero3); // argumentos = valores passados para os parâmetros

// Declare uma função que recebe 3 notas e mostra a média entre elas.
function media(n1, n2, n3) {
  let resultado = (n1 + n2 + n3) / 3;
  console.log(`A média é ${resultado}`);

  return resultado; // indica que o valor da variável será "externalizado"
  console.log("Oiee"); // dead-code = código que nunca vai ser executado
}

// let medBiologia = media(7.5, 8.0, 9.0);
// let medMatematica = media(7, 6, 3.5);
// let medPortugues = media(7.7, 9.6, 4.5);

// console.log(`Biologia = ${medBiologia}`);
// console.log(`Matemática = ${medMatematica}`);
// console.log(`Português = ${medPortugues}`);

// Função ENTRADA(parâmetro) -> PROCESSAMENTO(lógica) -> SAÍDA(retorno)
// y = f(x)
// f = função
// x = parâmetro
// y = resultado/retorno
function estaAprovado(n1, n2, n3) {
  // indicar se o aluno foi aprovado ou não
  let med = media(n1, n2, n3);

  if (med >= 7) {
    console.log("Aprovado!");
    return true; // podemos retornar "Aprovado!"
  } else {
    console.log("Reprovado!");
    return false; // podemos retornar "Reprovado!"
  }
}

let statusAluno = estaAprovado(6.5, 3.0, 8.6);
console.log(statusAluno);