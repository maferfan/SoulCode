// Core modules = módulos embutidos

// Módulo operational system (os)

const os = require("os");

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.version());
// console.log(os.uptime());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.cpus().length);
// console.log(os.homedir());
// console.log(os.hostname());

const fs = require("fs");

fs.writeFileSync("./batata.txt", "BATATA É BOM DEMAIS");

const arquivo = fs.readFileSync("./batata.txt");

/** EXERCÍCIO IV: Escreva um arquivo txt com as informações do seu sistema:
 * Explore as funções do módulo os e gere um arquivo txt com informações
 * da máquina.
 */

const pc = `Arquitetura: ${os.arch()} 
  \nPlataforma: ${os.platform()} 
  \nTipo: ${os.type()} 
  \nVersão: ${os.version()} 
  \nTempo de atividade: ${os.uptime()} 
  \nMemoria ram: ${os.freemem()} 
  \nMemoria total: ${os.totalmem} 
  \nCpus: ${JSON.stringify(os.cpus())} 
  \nPasta home: ${os.homedir()} 
  \nNome da maquina: ${os.hostname()}`

fs.writeFileSync("pc.txt", pc)