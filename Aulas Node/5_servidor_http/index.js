const http = require("http");
const os = require("os");
const cpf = require("cpf")

const host = "localhost";
const porta = 3000;

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

/** EXERCÍCIO VI: Escreva na resposta do servidor informações sobre
* o sistema usando o módulo os.
* EXERCÍCIO VII: Instale o pacote cpf, e na resposta escreva
* um cpf aleatório.
* TEMPO = 17H00
*/

const servidor = http.createServer((requisicao, resposta) => {
  console.log("Requisição ocorreu!");
  resposta.write(pc);
  resposta.write(`\n\nCPF: ${cpf.generate()}`)
  resposta.end();
})



servidor.listen(porta, host)