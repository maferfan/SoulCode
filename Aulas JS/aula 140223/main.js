// Dia 14.02
// Variaáveis e operadores

let nomeCompleto; //declaração // camel case 
nomeCompleto = "Gabriel Diniz"; // atribuição //String
console.log(nomeCompleto); 
nomeCompleto = "José Almir"; // re-atribuição (redefinir)
console.log(nomeCompleto)

let idade = 20; // declaração e atribuição //Int
console.log(idade);

console.log("Meu nome é " + nomeCompleto + ", e tenho " + idade + " anos");

const cpf = "832.328.328-00"; //constantes (const) não podem ser alteradas 

// tipos
let golsSofridos = 3; // numero = number
let chanceDerrota = 0.55; // numero decimal
let nomeTime = "Valência"; //string
let patrocinio; // undefined = não tem valor definido
patrocinio = "Soulcode"; // definindo (atribuindo) valor a var undefined

// boolean = 2 valores possiveis (true ou false)
let timeGanhou = true;
if (timeGanhou) {
  console.log(patrocinio + "\n" + nomeTime);
}



//Operadores aritméticos
let soma = 200 + 100;
let sub = 100 - 54.2;
let mult = 5 * 7;
let div = 400 / 25;
let resto = 8.5 % 3;       
let expressao = soma + sub * div;

console.log("A soma é " + soma + "!");
console.log(`A subtração é ${sub}!`)
console.log(mult)
console.log(div)
console.log(resto)
console.log(expressao)

let i = 0;
i = i + 1; // o novo valor de i é 0 + 1;
i++; // altera o valor de i incrementando em 1 //incremento
i--; // altera o valor de i decrementando em 1 //decremento

console.log(i)

for (i; i < 10; i++) {
  console.log(i)
}

//Operadores relacioas (>, <, >=, <=, ==, !=)

let a = 3;
let b = 5;

console.log(a > b); // false   maior que
console.log(a < b); // true    menor que
console.log(a >= b); // false  maior ou igual
console.log(a <= b); // true   menor ou igual
console.log(a == b); // false  igual a 
console.log(a != b); // true   diferente de

console.log(a == "3"); // A é igual a "3"?  true
console.log(a === "3"); // A é estritamente igual a "3"?  false 
console.log(a !== "3"); // A é estritamente diferente de "3"?  true 
console.log(a != "3"); // A é diferente de "3"?  false 
/// o operador === compara Valor e Tipo

