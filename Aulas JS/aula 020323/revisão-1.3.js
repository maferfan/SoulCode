// 1.3 Estruturas de seleção
// 1. Defina uma variável para armazenar um caractere e determine se é uma
// vogal ou uma consoante. Use um switch-case para implementar a lógica.

let caractere = "b";

switch (caractere) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vogal");
    break;
  default:
    console.log("Consoante")
}

// 2. Defina uma variável para armazenar um mês do ano (em número) e im-
// prima o nome do mês correspondente. Use um switch-case para imple-
// mentar a lógica.

let mes = "5";

switch (mes) {
  case "1":
    console.log("Janeiro");
    break
  case "2":
    console.log("Fevereiro");
    break;
  case "3":
    console.log("Março");
    break;
  case "4":
    console.log("Abril");
    break;
  case "5":
    console.log("Maio");
    break;
  case "6":
    console.log("Junho");
    break
  case "7":
    console.log("Julho");
    break;
  case "8":
    console.log("Agosto");
    break;
  case "9":
    console.log("Setembro");
    break;
  case "10":
    console.log("Outubro");
    break;
  case "11":
    console.log("Novembro");
    break;
  case "12":
    console.log("Dezembro");
    break;
  default:
    console.log("Não existe esse mês")
}

// 3. Defina uma variável para armazenar um número de 1 a 12 e imprima
// o número de dias correspondente ao mês. Use um switch-case para
// implementar a lógica. Considere que fevereiro tem 28 dias em anos não
// bissextos.

let meses = "12";

switch (meses) {
  case "1":
    console.log("31");
    break
  case "2":
    console.log("28");
    break;
  case "3":
    console.log("31");
    break;
  case "4":
    console.log("30");
    break;
  case "5":
    console.log("31");
    break;
  case "6":
    console.log("30");
    break
  case "7":
    console.log("31");
    break;
  case "8":
    console.log("31");
    break;
  case "9":
    console.log("30");
    break;
  case "10":
    console.log("31");
    break;
  case "11":
    console.log("30");
    break;
  case "12":
    console.log("31");
    break;
  default:
    console.log("Não existe esse mês")
}


// 4. Defina uma variável para armazenar um número de 1 a 4 e imprima o
// nome da estação do ano correspondente. Use um switch-case para im-
// plementar a lógica.

let estacaoAno = 3;

switch (estacaoAno) {
  case 1:
    console.log("Primavera");
    break;
  case 2:
    console.log("Verão");
    break;
  case 3:
    console.log("Outono");
    break;
  case 4:
    console.log("Inverno");
    break;
  default:
    console.log("Essa estação do ano não existe");
}

// 5. Defina uma variável para armazenar uma nota (de 0 a 10) e imprima a
// menção correspondente. Use um switch-case para implementar a ló-
// gica. Considere as seguintes faixas de notas: de 0 a 4 - Insuficiente, de
// 5 a 6 - Regular, de 7 a 8 - Bom, de 9 a 10 - Excelente.

let nota = 6;

switch (nota) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Insuficiente");
    break;
  case 5:
  case 6:
    console.log("Regular");
    break;
  case 7:
  case 8:
    console.log("Bom");
    break;
  case 9:
  case 10:
    console.log("Excelente");
    break;
  default:
    console.log("Nota invalida");
}