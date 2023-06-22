// Exercício 1
// Defina variáveis para peso e altura. Calcule o IMC.
// A formula é: PESO / (ALTURA * ALTURA)
// Mostre a seguinte mensagem: "Meu IMC é 17.54"

// Exercício 2
// Defina variáveis para raio, PI (constante) e calcule a àrea do circulo
// A formula é: PI * R * R


// Exercício 3
// Defina variáveis para raio, PI (constante) e calcule a circunferência
// A formula é: 2 * PI * R

// Exercício 4
// Defina variáveis para temperatura em celsius e converta para fahrenheit.
// A formula é: C * 1.8 + 32

console.log("Exercício 1");
let peso, altura, imc;
peso = 80;
altura = 1.80;
imc = peso / (altura * altura);
console.log(`Meu imc é = ${imc.toFixed(2)} \n`);

console.log("Exercício 2");
const pi = 3.14;
let raio = 3;
let formula = pi * raio * raio;
console.log(`A formula é: ${formula.toFixed(2)} \n`)

console.log("Exercício 3");
let raio2 = 5;
let formula2 = 2 * pi * raio2;
console.log(`A formula é: ${formula2.toFixed(2)} \n`)

console.log("Exercício 4");
let tempCelsius = 32;
let tempFahrenheit = tempCelsius * 1.8 + 32;
console.log(`A formula é: ${tempFahrenheit.toFixed(1)} \n`)