import { useState } from "react";
import { useForm } from "react-hook-form"

export function Herois() {

  const [heroi, setHeroi] = useState()
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => setHeroi(JSON.stringify(data));
  //const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="herois">
      <h1>Cadastro de Super Heróis</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="nome">Nome</label><br />
        <input type="text" id="nome" {...register("nome")} /><br />

        <label htmlFor="poder">Poder</label><br />
        <input type="text" id="poder" {...register("poder")} /><br />

        <label htmlFor="fraqueza">Fraqueza</label><br />
        <input type="text" id="fraqueza" {...register("fraqueza")} /><br />

        <label htmlFor="historia">Historia do Herói</label><br />
        <textarea id="historia" cols="30" rows="5" {...register("historia")}></textarea><br />

        <button type="submit">Cadastrar</button>
        {heroi && <p>{heroi}</p>}
      </form>
    </div>
  )
}