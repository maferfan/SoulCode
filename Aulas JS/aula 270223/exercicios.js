// //01 Exercício I: Crie um array com 10 números.
// // Percorra e calcule a soma de todos os números.

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let soma = 0;

// for (let i = 0; i < numeros.length; i++) {
//   soma += numeros[i];
// }
// console.log(`A soma é ${soma}`);

// //02 Exercício II: Crie um array com 5 notas.
// // Percorra e calcule a média das notas.

// let notas = [8, 7, 6, 5, 10];
// let soma2 = 0;

// for (let i = 0; i < notas.length; i++) {
//   soma2 += notas[i];
// }

// console.log(`A média é ${soma2 / 5}`);

// //03 Exercício III: Crie um array com 7 números.
// // Percorra e indique qual o maior número deles.

// let array1 = [1, 2, 10, 4, 5, 6, , 7]
// let armazenar = 0;
// for (let i = 0; i < array1.length; i++) {

//   if (array1[i] > armazenar) {
//     armazenar = array1[i]
//   }

// }
// console.log(armazenar)


// //04 Exercício IV: Crie um array de frutas.
// // Percorra e mostre o tamanho do nome de cada fruta.

// let frutas = ["banana", "abacate", "tangerina", "laranga"];
// for (let i = 0; i < frutas.length; i++) {
//   console.log(`a fruta: ${frutas[i]} tem o tamanho: ${frutas[i].length}`)

// }


// //05 Exercício V: Crie um array de 5 números aleatórios.
// // Utilize o esquema Math.floor(Math.random() * 100) para gerar
// // números entre 0 e 99.
// // Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// // apenas os números pares.
// // Em seguida, mostre a soma de todos os números pares do array.

// let aleatorio = [];
// for (let i = 0; i < 5; i++) {
//   aleatorio.push(Math.floor(Math.random() * 100));
// }
// console.log(aleatorio);
// let pares = [];
// soma = 0;
// for (let i = 0; i < aleatorio.length; i++) {
//   if (aleatorio[i] % 2 == 0) {
//     pares.push(aleatorio[i]);
//     soma += aleatorio[i];
//   }
// }
// console.log(soma);
// console.log(pares);

// //06 Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// // se a extensão é .mp3 ou .wav (retorne true ou false)

// function verificarExtensap(arquivo) {
//   return arquivo.endsWith(".mp3");
// }

// console.log(verificarExtensap("arquivo.wav"));

// //07 Exercício VII: Crie uma função que extrai os dígitos verificadores
// // de um cpf. Ex: "056.985.990-23" -> "23".
// // Retorne apenas os dois ultimos dígitos.

let cpf = "056.985.990-23";

function verificarCpf(cpf) {
  return cpf.slice(cpf.length - 2);
}

console.log(verificarCpf(cpf));


// //08 Exercício VIII: Crie uma função que inverte uma string.
// // Retorna ela invertida. BATATA -> ATATAB

// function inverteString(string) {
//   let batataInvert = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     batataInvert += string[i];
//   };
//   return batataInvert;
// }

// //09 Exercício IX: Crie uma função que mostra os elementos do array
// // em ordem invertida. [1, 2, 3] -> [3, 2, 1]

// let array3 = [1, 2, 3];
// function inverteArray(arrayInvert) {
//   let novoArray = [];
//   for (let i = arrayInvert.length - 1; i >= 0; i--) {
//     novoArray += arrayInvert[i];
//   };
//   return novoArray;
// }
// console.log(inverteArray(array3));