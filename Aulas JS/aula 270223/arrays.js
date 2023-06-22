// Aula 27.02
// Tópicos: Arrays

// Declaração de arrays
let figuras = ["coracao", "estrela", "ok", "nao", "joinha", "sorriso"];
// console.log(figuras); // representação em texto

let numeros = [3, 1, 5, 7, 2];
// console.log(numeros);

// Acessando elementos
// console.log(figuras[5]);
// console.log(figuras[1]);
// console.log(numeros[2]);
// console.log(numeros[0]);
// console.log(numeros[3]);
// console.log(numeros[1000]);

// Alterando valor de um elemento
// console.log(numeros);
// numeros[2] = 700; // Alterar o valor armazenado no índice 2, o 5 original se perde
// console.log(numeros);
// numeros[2]++; // Alterar o valor armazenado, incrementando o que estiver
// console.log(numeros);
// figuras[5] = "batata";
// console.log(figuras);
// console.log(numeros.length); // Quantos elementos existem no array
// console.log(figuras.length);

// for (let i =0; i < figuras.length; i++) {
//   console.log(`O valor do index ${i} é ${figuras[i]}`);
// }

let nomes = ["Jose", "Carlos", "André", "Pedro"];

// for (let nome of nomes) {
//   console.log(nome);
// }

// Inserir/Remover
let listaProdutos = []; // Array vazio

listaProdutos.push("Smart band"); // adicionar o elemento no final do array       
listaProdutos.push("Bolo de cenoura");
listaProdutos.push("Batata remasterizada");
listaProdutos.push("Smartphone 2MB", "HD500kb", "RAM 200B "); // adiciona mais de um elemento por vez

console.log(listaProdutos.length);
console.log(listaProdutos);
listaProdutos.pop(); //Remove o último elemento
console.log(listaProdutos.length);
console.log(listaProdutos);

console.log(listaProdutos.includes("Bolo de cenoura")); // Verifica se há um elemento igual