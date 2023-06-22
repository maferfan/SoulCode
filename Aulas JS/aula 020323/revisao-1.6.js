// 1.6 Strings

// 1. Escreva uma função que receba uma string e retorne o número de ca -
//   racteres contidos nela.

function numeroCaracteres(palavra) {
  return palavra.length;
}
console.log(numeroCaracteres("Batata"));

console.log("---------------------------------------------------------");
// 2. Escreva uma função que receba uma string e retorne a mesma string em
// letras maiúsculas.

function maiuscula(palavra) {
  return palavra.toUpperCase();
}
console.log(maiuscula("Batata"));

console.log("---------------------------------------------------------");
// 3. Escreva uma função que receba uma string e retorne a mesma string em
// letras minúsculas.

function minuscula(palavra) {
  return palavra.toLowerCase();
}
console.log(minuscula("Batata"));

console.log("---------------------------------------------------------");
// 4. Escreva uma função que receba duas strings e retorne true se elas forem
// iguais ou false caso contrário.

function iguais(palavra1, palavra2) {
  return palavra1.includes(palavra2);
}

console.log(iguais("Batata", "Batata"));

console.log("---------------------------------------------------------");
// 5. Escreva uma função que receba uma string e um número e retorne os
// últimos caracteres da string de acordo com o número informado.

function cortar(palavra, n) {
  return palavra.slice(n);
}
console.log(cortar("Batata", 3));

console.log("---------------------------------------------------------");
// 6. Escreva uma função que recebe uma frase e uma palavra.Retorne a frase
// com as ocorrências da palavra censuradas / trocadas por ***.Exemplo:
// censura("Eu jogo lol e valorant, mas lol é melhor", "lol") -> "Eu jogo ***
// e valorant, mas *** é melhor". Dica: use a função replaceAll.

function censurar(frase, palavra) {
  return frase.replaceAll(palavra, "***");
}

console.log(censurar("Eu jogo lol e valorant, mas lol é melhor", "lol"));

console.log("---------------------------------------------------------");
// 7. Escreva uma função que receba uma string e um caractere e retorne o
// número de ocorrências desse caractere na string.


function ocorrenciaCaractere(palavra, caractere) {
  let contadora = 0;
  for (let i = 0; i < palavra.length; i++) {
    if (palavra.toUpperCase()[i] == caractere.toUpperCase()) {
      contadora += 1;
    }
  }
  return contadora;
}
console.log(ocorrenciaCaractere("Batata", "a"));