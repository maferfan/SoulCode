//Estruturas de seleção

let lang = "en"; // pt, es, en

switch (lang) {
  case 'pt' :
    console.log("Olá mundo!");
    break;
  case 'es' :
    console.log("Hola, mundo!");
    break;
  case 'en' :
    console.log("Hello, World!");
    break;
  default :
  console.log("Não temos suporte a esse idioma: " + lang);
}