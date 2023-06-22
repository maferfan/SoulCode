// 1 Exercícios
// 1.1 Variáveis e operadores

// 1. Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius.A equação para realizar a conversão é:

// C = F − 32 / 1.8

let fahrenheit = 86.5;
let celsius = (fahrenheit - 32) / 1.8;
console.log(celsius.toFixed(2));

// 2. Crie duas variáveis nome e sobrenome.Crie uma nova variável chamada
// nomeCompleto e realize a concatenação de nome e sobrenome com
// template strings.

let nome = "Gabriel";
let sobrenome = "Diniz";
console.log("Gabriel " + "Diniz");

// 3. Crie cinco variáveis que representam cinco notas de um estudante.Cal -
//   cule a média ponderada, sabendo que o peso das notas são respectiva -
//     mente: 3, 2, 1, 4 e 5.

let nota1 = 3;
let nota2 = 2;
let nota3 = 1;
let nota4 = 4;
let nota5 = 5;
media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
console.log("Media = " + media);

// 4. Crie duas variáveis que representam as dimensões (em km) de um ter -
//   reno: comprimento e largura.Calcule a área deste terreno, em seguida
// converta para hectares.Nota: 1 km2 equivale a 100 hectares.

let largura = 2;
let comprimento = 3;
let area = 2 * 3;
hectares = area * 100;
console.log("Hectares = " + hectares);

// 5. Crie uma variável que armazena uma temperatura em Kelvin.Converta
// para Celsius.A equação é:

// C = K − 273

let kelvin = 303.15;
let c = kelvin - 273;
console.log("Celsius = " + c.toFixed(2));