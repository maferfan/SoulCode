console.log("Executando");

const semaforo = document.getElementById('semaforo-img');
const semaforoMsg = document.getElementById("semaforo-descricao");

function semaforoVermelho() {
  semaforoMsg.style.color = "red"
  semaforoMsg.innerHTML = "Pare!";
  semaforo.src = "https://i.postimg.cc/MKS3MpWx/vermelho.png";
}

function semaforoAmarelo() {
  semaforoMsg.style.color = "yellow"
  semaforoMsg.innerHTML = "Atenção!";
  semaforo.src = "https://i.postimg.cc/RCfbZHxX/amarelo.png"
}

function semaforoVerde() {
  semaforoMsg.style.color = "green"
  semaforoMsg.innerHTML = "Continue!";
  semaforo.src = "https://i.postimg.cc/vHtqWwBn/verde.png";
}