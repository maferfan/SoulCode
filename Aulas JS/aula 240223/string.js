// Strings = cadeia de caracteres

let meuPet = "Fred";;//"",'', ``
// F, r, e, d
console.log(meuPet[0]); // Acessando o caractere "F" 
console.log(meuPet[1]); // Acessando o caractere "r" 
console.log(meuPet[2]); // Acessando o caractere "e" 
console.log(meuPet[3]); // Acessando o caractere "d" 
console.log(meuPet[500]); // undefined // Não existe caractere nesse índice

console.log(meuPet.length); // Retorna o tamanho da string

for (let i = 0; i < meuPet.length; i++) {
  // 0 até 3
  // console.log(i)
  console.log(meuPet[i]);
}

let arquivo = "batata.mp4"
console.log(arquivo.endsWith(".mp4"));
console.log(arquivo.startsWith("b"));

let frase = "Eu comi arroz, batata e carne";
console.log(frase.includes("feijão"));

console.log(frase.indexOf("c")) //Busca a posição do caractere da esquerda p/ direita
console.log(frase.lastIndexOf("c")) //Busca a posição do caractere da direita p/ esquerda
console.log(frase.indexOf("x")); // -1 = Não encontrou
console.log(frase.indexOf("arroz")); // Retorna onde inicia a palavra

console.log(frase.replace("carne", "ovo")); // Troca uma palavra por outra

let palavra2 = "BATATA";
console.log(palavra2.slice(1)); // Cortou do 1 até o final