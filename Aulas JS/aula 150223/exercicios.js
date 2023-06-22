// Exercício I
// Defina 3 variáveis com notas de 0 a 10. Calcule a média
// das três notas. Em seguida mostre no console o status do aluno:
//      Maior ou igual 7 = Aprovado
//      Abaixo de 7 e maior ou igual a 5 = Reforço
//      Menor que 5 = Reprovação

let nota1 = 7;
let nota2 = 8;
let nota3 = 6.5;
let media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(2));

if (media >= 7) {
  console.log("O aluno está Aprovado!");
}
else if (media < 5) {
  console.log("O aluno está Reprovado!");
}
else {
  console.log("O aluno precisa de reforço!");
}


console.log("\n");
// Exercício II
// Simule a tabela do IMC com base no valor calculado
// no exercício anterior. Indique o status com base no valor do IMC.

let peso = 80;
let altura = 1.80;
let imc = peso / (altura * altura);

console.log(imc.toFixed(2))

if (imc < 18.5) {
  console.log("Abaixo do peso.");
}
else if (imc <= 24.9) {
  console.log("Peso normal.");
}
else if (imc <= 29.9) {
  console.log("Sobrepeso.");
}
else if (imc <= 34.9) {
  console.log("Obesidade grau 1.");
}
else if (imc <= 39.9) {
  console.log("Obesidade grau 2.");
}
else {
  console.log("Obesidade grau 3 ou mórbida.");
}

console.log("\n");
// Exercício III: Defina um número a e um número b.
// Verifica qual o maior, ou menor, ou se são iguais

let a = 4;
let b = 6;

if (a > b) {
  console.log(`a(${a}) é maior que b(${b})`);
}
else if (b > a) {
  console.log(`b(${b}) é maior que a(${a})`);
}
else {
  console.log(`a(${a}) e b(${b}) são iguais`)
}

