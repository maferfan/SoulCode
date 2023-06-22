// Operadores lógicos: NOT(!), AND(&&), OR(||)

// Operador NOT(!) = Inverte o valor lógico
let ligado = false;
let desligado = !ligado;

/*
  Tabela (NOT)
  !true = false
  !false = true
*/

// Operador AND(&&) = Todas as expressões precisam ser true para resultar em true, apenas uma precisa ser false para resultar em false
let gasolinaTanque = 1;                                            
let reserva = gasolinaTanque < 5;
let podeAbastecer = desligado && reserva;
let podeViajar = ligado && !reserva;

console.log("Se o carro estiver desligado e na reserva, então, pode abastecer... \n");
console.log(`O carro está ligado: ${ligado}`);
console.log(`O carro está na reserva: ${reserva}`);
console.log(`Pode abastecer: ${podeAbastecer}`);
console.log("\nSe o carro estiver ligado e não estiver na reserva, então, pode viajar... \n");
console.log(`Pode viajar: ${podeViajar}`);

/*
  Tabela AND(&&)
  true && true = true
  true && false = false
  false && true = false
  false && false = false
*/

// Operador OR(||) = Basta um expressão ser true
let temCarro = false;
let podePedirUber = true;

console.log("\nSe tiver carro ou puder pedir uber, então, pode Ir ao shopping...\n");
console.log(`Tem carro: ${temCarro}`);
console.log(`Pode pedir uber: ${podePedirUber}`);
console.log("\nPoder ir ao shopping...\n");

/*
  Tabela OR(||)
  true || true = true
  true || false = true
  false || true = true
  false || false = false
*/

//Estruturas condicionais (if-else)

let idade = 18;
if (idade >= 18) {
  console.log("Maior de idade!");
}
else {
  console.log("Menor de idade!")
}
