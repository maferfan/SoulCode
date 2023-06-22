/** EXERCÍCIO V: Crie um arquivo txt com 1000 cpf aleatórios.
 * Desafio: Leia o arquivo e mostre um por um dos 1000 cpf
 * que estão dentro do arquivo.
 */
const cpf = require('cpf')
const fs = require('fs');

let str = '';
for (i = 0; i < 1000; i++) {
  str += `${cpf.generate()}\n`
}

fs.writeFileSync("./cpfs", str)
console.log(fs.readFileSync("./cpfs", { encoding: 'utf8', flag: 'r' }));

