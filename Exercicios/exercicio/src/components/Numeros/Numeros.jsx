import { Paragrafo } from "./Numeros.js"

export function Numeros(props){
    const numero = props.numero
    let mensagem 
    if(numero%2 == 0){
        return mensagem = <Paragrafo>{numero} é par</Paragrafo>
    }else{
       return mensagem = <Paragrafo>{numero} é ímpar</Paragrafo>
    }
}