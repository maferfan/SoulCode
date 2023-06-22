// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular
// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo
let contaBancaria = {
  codigo: 80319321, saldo: 500.00, cpf: "213321432-40", nome: "João",
  saque(valor) { this.saldo -= valor },
  deposisto(valor) { this.saldo += valor }
}

contaBancaria.saque(40.00);
console.log(contaBancaria.saldo);
contaBancaria.deposisto(60.00);
console.log(contaBancaria.saldo);

// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o valor aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total

let produto = {
  nome: "Teclado", descricao: "Teclado semi-mecânico Fortrek", quantidade: 277, precoOriginal: 129.90, desconto: 20.00,
  calcularPrecoDesconte() { return this.precoOriginal - this.desconto },
  apresentacao() {
    console.log(`Nome: ${this.nome}\nDescrição: ${this.descricao}\nQuantitida: ${this.quantidade}\nPreço original: ${this.precoOriginal}\nDesconto: ${this.desconto}\nPreço final: ${this.calcularPrecoDesconte()}`)
  },
  comprar(total) { console.log(total - this.quantidade) }
}

produto.apresentacao();
produto.comprar();
