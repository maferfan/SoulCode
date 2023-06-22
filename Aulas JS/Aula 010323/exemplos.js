// Aula 01.03
// Tópicos: Objetos

// Objetos = Servem para estruturar dados
// - propriedades (características)
// - métodos (ações)

let pet = {
  nome: "Fred", // propriedade-valor
  idade: 2,
  peso: 3.5
}; // {} indica que estou declarando um objeto

let pet2 = { nome: "Dorothy", idade: 5, peso: 4.5, especie: "gato" };

let pet3 = { nome: "Picles", idade: 5, peso: 4.5, especie: "gato", comidaFavorita: "peixe" };

// Acesso de propriedades
console.log(pet.nome);
console.log(pet.idade);
console.log(pet.peso);
console.log(pet.especie);
console.log(pet.fullstack); // essa propriedade não existe
console.log(pet["nome"]); // equivale a pet.nome

// Alterar valores das propriedades
pet.nome = "Neo"; // alteração do nome do pet
// pet.idade = 6;
// pet.peso = 100;
pet.idade++;
pet.peso += 3;
console.log(pet);
// pet = {}; // com const podemos alterar as propriedades
pet["nome"] = "Batata"; // peso.nome = "Batata"
console.log(pet);

// Adicionando nova propriedade
pet.cor = "laranja";
console.log(pet);

// Tip: altere as informações do seu pet usando uma das sintaxes acima
// adicione novas propriedades ao seu pet
pet3.idade++;
pet3.comidaFavorita = "ração";
pet3.raça = "siamês"