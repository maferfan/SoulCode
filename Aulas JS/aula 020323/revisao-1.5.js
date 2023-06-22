// 1.5 Funções
// 1. Escreva uma função que receba um número e retorne seu dobro.

function dobro(n) {
  return n + n;
}
console.log(dobro(5));

console.log("---------------------------------------------------------");
// 2. Escreva uma função que receba um número e retorne seu quadrado.

function quadrado(n) {
  return n * n;
}
console.log(quadrado(4));

console.log("---------------------------------------------------------");
// 3. Escreva uma função que receba nome, idade, endereço e retorne uma
// mensagem no formato: "Olá, eu sou X, tenho X ano(s) e moro em X". Faça
// uso da interpolação de strings.

function apresentacao(nome, idade, endereco) {
  return `Olá eu sou ${nome}, tenho ${idade} ano(s), e moro em ${endereco}`;
}
console.log(apresentacao("Gabriel Diniz", 20, "Belo Horizonte, MG"));

console.log("---------------------------------------------------------");
// 4. Escreva uma função que receba dia, mês e ano e retorne a data por
// extenso no formato "DD/MM/AAAA".

function data(dia, mes, ano) {
  return `${dia}/${mes}/${ano}`;
}
console.log(data("02", "03", "2023"));

console.log("---------------------------------------------------------");
// 5. Escreva uma função que receba um preço de um produto e um percen-
// tual. Retorne o valor aplicado ao desconto.

function desconto(preco, percentual) {
  return preco - (preco / 100 * percentual)
}
console.log(desconto(100, 40));

console.log("---------------------------------------------------------");
// 6. Escreva uma função que receba uma palavra e um número. Retorne a
// palavra repetida a quantidade de vezes indicada pelo segundo parâme-
// tro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize
// um loop para resolver.

function repetir(palavra, quantidade) {
  let txt = "";
  for (let i = 1; i <= quantidade; i++) {
    txt += palavra;
  }
  return txt;
}
console.log(repetir("batata", 3));

console.log("---------------------------------------------------------");
// 7. Escreva uma função que recebe outra função e invoca ela.


function dizerOla() {
  console.log("Olá");
}
function evocarFuncao(funcao) {
  funcao();
}
evocarFuncao(dizerOla);

console.log("---------------------------------------------------------");
// 8. Transforme os itens 1, 2 e 3 em arrow function expressions.

// 1. Escreva uma função que receba um número e retorne seu dobro.

const dobro2 = (n) => n + n;
console.log(dobro2(4));

// 2. Escreva uma função que receba um número e retorne seu quadrado.
const quadrado2 = (n) => n * n;
console.log(quadrado2(3));

// 3. Escreva uma função que receba nome, idade, endereço e retorne uma
// mensagem no formato: "Olá, eu sou X, tenho X ano(s) e moro em X". Faça
// uso da interpolação de strings.

const apresentacao2 = (nome, idade, endereco) => `Olá eu sou ${nome}, tenho ${idade} ano(s), e moro em ${endereco}`;
console.log(apresentacao2("Gabriel", 20, "Belo Horizonte, MG"));