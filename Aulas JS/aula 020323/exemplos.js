// 02.03
// Tópicos:  objetos aninhados e arrays de objetos

// Objetos aninhados = objeto dentro de outro

let pessoa = {
  nome: "José Almir",
  cpf: "000.000.000-00",
  contato: {
    email: "josealmir@soulcode.com",
    contato: "00 9-9999-9999"
  },
  endereço: { // agrupar propriedades
    cidade: "Ubajara",
    estado: "CE",
    cep: "62350-000",
    rua: "Rua X",
    numero: 271
  },
  objetivosProfissionais: ["Home Office", "CLT", "Desenvolvedor Senior"],
  formação: [
    { nome: "Ensino Médio", periodo: "2006-2008" },
    { nome: "Técnico em Informática", periodo: "2008-2010" },
    { nome: "Bachalerado em Batata", periodo: "2010-" },
  ]
}
console.log(pessoa.formação[0].periodo);