// 1.2 Estruturas condicionais
// 1. Crie três variáveis: a, b e c. Estas variáveis armazenam números. Exiba
// qual destes números é o maior.

let a = 5;
let b = 3;
let c = 4;
if (a > b && a > c) {
  console.log("O maior numero = " + a);
}
else if (b > a && b > c) {
  console.log("O maior numero = " + b);
}
else if (c > a && c > b) {
  console.log("O maior numero = " + c);
}
else {
  console.log("Existem dois ou mais números iguais");
}

// 2. Crie três variáveis que representam os três lados de um triângulo. Aplica
// a seguinte regra para definir se o triângulo é possível: Se a soma de dois
// lados é maior que o terceiro lado.

let a1 = 3;
let a2 = 5;
let a3 = 4;

if ((a1 + a2) > a3) {
  console.log("O triângulo é possível");
}
else {
  console.log("O triângulo não é possível");
}

// 3. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior
// que 130) mostre uma mensagem de aviso.

let idade = 40;
if (idade < 0 || idade > 130) {
  console.log("Idade inválida");
}

// 4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte
// regra para aplicar ajustes salariais: Caso não possua dependentes não
// realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o
// salário. Caso seja acima de 5 aumentar em 40% o salário.

let salario = 1200;
let quantidadeDependentes = 6;
if (quantidadeDependentes > 5) {
  salario += salario * 40 / 100;
}
else if (quantidadeDependentes <= 5 && quantidadeDependentes >= 1) {
  salario += salario * 30 / 100;
}
else {
  console.log("Sem aumento");
}

console.log(salario);