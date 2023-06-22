const calc = require("./ModuloCalculadora");

console.log(calc.soma(1, 1));
console.log(calc.sub(4, 8));
console.log(calc.div(3, 3));
console.log(calc.mult(4, 2));

console.log("\n\n-----------------------------------------------------------\n\n");

const moduleImc = require("./moduleImc");
const imc = moduleImc.calcularImc(80, 1.80)

console.log(imc.toFixed(2));
console.log(moduleImc.tabelaImc(imc))

console.log("\n\n-----------------------------------------------------------\n\n");

const moduleConverters = require("./moduloConversores");
const celsius = 28;
const fahrenheit = moduleConverters.celsiusFahrenheit(celsius);

console.log(moduleConverters.celsiusFahrenheit(celsius).toFixed(1));
console.log(moduleConverters.fahrenheitCelsius(fahrenheit).toFixed(1));

console.log("\n\n-----------------------------------------------------------\n\n");

const autenticar = require("./moduloLogin");

console.log(autenticar("gabriel@gmail.com", "123456"));