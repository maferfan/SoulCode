/** EXERCÍCIO II: Crie um novo módulo chamado moduloConversores.js e exporte funções que convertem, utilize elas no index usando o require:
 * - celsius para fahrenheit;
 * - fahrenheit para celsius;
 */

function celsiusFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

function fahrenheitCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

module.exports = { celsiusFahrenheit, fahrenheitCelsius };