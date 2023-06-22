// Módulo IMC
// Terá um funcionalidades a respeito do cálculo

function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

/** EXERCÍCIO I: Adicione e exporte uma função que recebe um valor de IMC e retorna o nível de acordo com alguma tabela de IMC */
function tabelaImc(imc) {

  if (imc < 16.9) {
    return "Muito abaixo do peso";
  }
  else if (imc <= 18.4) {
    return "Abaixo do peso";
  }
  else if (imc <= 24.9) {
    return "Peso normal";
  }
  else if (imc <= 29.9) {
    return "Acima do peso";
  }
  else if (imc <= 34.9) {
    return "Obesidade grau I";
  }
  else if (imc <= 40) {
    return "Obesidade grau II";
  }
  else {
    return "Obesidade grau III";
  }
}

// CommunJS
// Deste arquivo irei exportar apenas a função calcularImc
module.exports = { calcularImc, tabelaImc };
