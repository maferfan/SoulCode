// Arrow = flecha
// Arrow function = Sintaxe + curta

// function ola() {
//   console.log("Hello");
// }

// First-class citizen = funções são tratadas como valor
const ola = () => console.log("Hello!"); 
ola();// invocação

const soma = (a, b) => { 
  console.log(`A soma é ${a+b}`); return a+b;
};

console.log(soma(1,1));
