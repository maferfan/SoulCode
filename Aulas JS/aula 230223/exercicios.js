// Exercício I: Crie uma função para calcular o IMC,
// de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros
// que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO).

function calculoIMC (peso, altura) {
  console.log(`IMC = ${(peso / (altura * altura)).toFixed(2)}`);
}
let peso = 80.0;
let altura = 1.80;
calculoIMC(peso,altura);

// Exercício II: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%

function porcetagem (n) {
  return `Porcentagem = ${(n * 100).toFixed(1)}%`;
}

let n = 0.456;
console.log(porcetagem(n));

// Exercício III: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA se ele é negativo (true ou false)
// ehNegativo(-2) ===> true

function isNegative (num) {
  return (num < 0) ? true : false; 
}

console.log(isNegative(4));

// Exercício IV: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA o número formatado com notação monetária em R$ (BRL)
// Dica: use a https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

function formatBRL (num) {
  return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(num);
}
console.log(formatBRL(123456.789));

// Exercícios V: Crie uma função que conte até um número passado por parâmetro.
// Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000.
// OBS: Não possui retorno.

function contador (num) {
  for (i = 1; i <= num; i++) {
    console.log(i)
  }
}
contador(73);

// Exercícios VI: Crie uma função que recebe um nome e sobrenome.
// RETORNA o nome completo como resultado.

function nomeCompleto (nome, sobrenome) {
  return nome  + " " + sobrenome; 
}
console.log(nomeCompleto("Gabriel", "Diniz"));

// Exercícios VIII: Crie uma função que recebe a area de um circulo
// e mostra o nível:

function areaCirculo (r) {
  return Math.PI * (r * r);
}
console.log(areaCirculo(3).toFixed(2));

// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function nivel (n) {
  if (n >= 1 && n <= 20) {
    return "Nível I";
  }
  else if (n => 21 && n <=40) {
    return "Nível II";
  } 
  else {
    return "Nível inválido";
  }
}

console.log(nivel(21));
