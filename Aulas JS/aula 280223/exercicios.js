// Exercício I: Crie um array de palavras, para cada palavra
// verifique se o tamanho é menor que 5, se for transforme em BATATA
// Caso contrário retorne a palavra original em caixa alta.
let palavras = ["Arroz", "Feijão", "Carne", "Ovo", "Salada"];

let palavraMenorQue5 = palavras.map((palavra) => palavra.length < 5 ? "BATATA" : palavra.toUpperCase());
console.log(palavraMenorQue5);