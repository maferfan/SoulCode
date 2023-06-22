// while, for

// estruturas de repetição = loops = laços
// Valor inicial, condição de parada, atualização

// While = Enquanto
/*
  while (condição) {
    código a se repetir
  }
*/
let n = 0;

// Loop com parada e atualização
while (n < 10) {
  n++;
  console.log(n)
}

//1000 até 1
n = 1000;

while (n >= 1) {
  console.log(n);
  n--;
}

// Soma 1 + 2 + 3 + 4 + 5 + ... + 99 + 10= 5050 (PA)
let contador = 1;
let soma = 0;;

while (contador <= 100) {
  soma+= contador;
  contador++;
}

console.log(`\nSoma = ${soma}`);

//Estrutura Repetição: For

/*
  for (inicialização; condição; atualizaão) {
    o código a se peretir
  }
*/
console.log("\n\n-----------------\n\n");

// 1 até 100                  
for (let contador =1; contador <= 100; contador++) {
  console.log(contador);
}

// 100 até 1
for (let contador =100; contador >= 1; contador--) {
  console.log(contador);
}

// 1 + 2 + 3 + 4 + ... + 99 + 100
soma = 0;

for(let i = 1; i <= 100; i++) {
  soma = soma + i;
}
console.log(soma);
