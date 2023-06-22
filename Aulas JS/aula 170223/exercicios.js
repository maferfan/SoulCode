
// Exercício I: Faça a tabuada do 5
// 1 x 5 = 5
// 2 X 5 = 10
// ...
// 10 x 5 = 50
console.log("Exercício I:") 

let multiplicador = 1;
let multiplicando = 5;

while (multiplicador <= 10) {
  let produto = multiplicador*multiplicando;
  console.log(`Produto = ${produto}`);
  multiplicador++;
}

// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE)
console.log("\nExercício II:") 
let n = 1;

while (n <= 99) {
  if(n % 2 != 0) {
    console.log(`Impar = ${n}`);
  }
  n++;
}

// Exercícios III: Conte de 50 até 75
console.log("\nExercício II:");

n = 50;
while (n <= 75) {
  console.log(n);
  n++;
}

// Exercício IV: use o for para os exercícios anteriores 
console.log("\nExercício I(for):") ;
for (i = 1; i <= 10; i++) {
  console.log(`${i} x 5 = ${i*5}`);
}

console.log("\nExercício II(for):");
for (i = 1; i <= 99; i++) {
  if(i % 2 != 0) {
    console.log(`Impar = ${i}`);
  }
}

console.log("\nExercício III(for):");
for(i = 50; i <= 75; i++) {
  console.log(i);
}

