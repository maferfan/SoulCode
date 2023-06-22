// 1.4 Estruturas de repetição
// 1. Use um laço while para imprimir na tela todos os números pares de 2 a
// 10.

let n = 2;
while (n <= 10) {
  if (n % 2 == 0) {
    console.log(n);
  }
  n++;
}

console.log("---------------------------------------------------------");
// 2. Use um laço for para imprimir na tela a tabuada do 7 (de 1 a 10).

for (let i = 1; i <= 10; i++) {
  console.log(i * 7);
}

console.log("---------------------------------------------------------");
// 3. Use um laço for para imprimir na tela a sequência de Fibonacci até o
// décimo termo.

let n1 = 0;
let n2 = 1;
for (let i = 1; i <= 10; i++) {
  const proximo = n1 + n2;
  n1 = n2;
  n2 = proximo;
  console.log(n1);
}

console.log("---------------------------------------------------------");
// 4. Mostre a seguinte figura com utilização de laços:
// *
// **
// ***
// ****
// *****
let asterisco = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    asterisco += "*";
  }
  asterisco += "\n"
}
console.log(asterisco);

console.log("---------------------------------------------------------");
// 5. Escreva um programa que use um laço for para imprimir na tela os nú-
// meros de 10 a 1 (em ordem decrescente).

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("---------------------------------------------------------");
// 6. Mostre apenas os números ímpares de 1 até 1000.

for (let i = 1; i <= 1000; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}


