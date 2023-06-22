// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.
console.log('Exercício I:\n');

let dinheiro = 42;
let idade = 17;

if (dinheiro >= 20 && idade >= 18) {
  console.log("Pode comprar bebida!");
  dinheiro -= 20;
}
else {
  console.log("Não pode comprar bebida!");
}

// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.
console.log("\nExercício II:\n");

let salario = 540.30;

if(salario < 500) {
  salario += 50;
}
else if (salario < 1000){
  salario += 25;
}
else {
  console.log('Não houve aumento.');
}

console.log(`Salario ${salario.toFixed(2)}`);

// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)
console.log("\nExercício III:\n");

let diaDaSemana = 4;

switch (diaDaSemana) {
  case 0 :
    console.log("Domingo!");
    break;
  case 1 :
    console.log("Segunda!");
    break;
  case 2 :
    console.log("Terça!");
    break;
  case 3 :
    console.log("Quarta!");
    break;
  case 4 :
    console.log("Quinta!");
    break;
  case 5 :
    console.log("Sexta!");
    break;
  case 6 :
    console.log("Sabado!");
    break;
  default: 
    console.log("Esse dia não existe ou está incorreto");
}

// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.
console.log("\nExercício IV:\n");

let comida = 'pizza';

switch (comida) {
  case 'batata' :
  case 'carne' :
  case 'chocolate' :
    console.log("Humm, adoro");
    break;
  case 'pizza' :
  case 'sanduíche' :
    console.log("As vezes");
    break;
  default:
    console.log("Quero não!");
}

// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.
console.log("\nExercício V:\n");

let n = 3;

if (n % 2 == 0) {
  console.log(`O número ${n} é par:`);
}
else {
  console.log(`O número ${n} é impar:`);
}