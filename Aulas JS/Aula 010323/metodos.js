// Métodos = ação de um objeto

let pet = {
  // Atributos
  nome: "Fred",
  idade: 5,
  peso: 3.5,
  // Métodos = funções
  dormir() {
    console.log("Estou dormindo. zzzzzzzzzzzzzZZZ");
  },
  comer(comida) {
    console.log(`Estou comendo ${comida}`);
  },
  brincar() {
    console.log("Brincando!");
  },
};

// . lista as propriedades e métodos de um objeto
// pet.dormir(); // Invocação da função/método
// pet.comer("Peixe");
// pet.comer("Batata");

// Tip: crie no objeto pet o método brincar e coloque uma mensagem
// do console.log
// pet.brincar();


let pessoa = {
  nome: "João", idade: 25, nascionalidade: "Brasileiro",
  dizOi() { console.log(`Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.nascionalidade}`) },
  envelhecer() { this.idade++ },
}
// Tip: Melhore o método de dizerOi
// Adicione a mensagem neste formato:
// "Oi, meu nome é João, tenho 25 anos e sou brasileiro"
pessoa.dizOi();