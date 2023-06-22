import { useForm } from "react-hook-form"
import "./Pokemon.css"

export function Pokemon() {

  const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const { register, handleSubmit, formState: { errors } } = useForm();

  // handleSubmit é responsavel por intermediar a captura dos dados do formulário e agrupar-las em um objeto "data" e passar para a função de tratamento.
  function onSubmit(data) {
    console.log(data)
  }


  return (
    <div className="pokemon">

      <h1>Cadastro de Pokemon</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="nome" >Nome</label> <br />
        <input type="text" id="nome" {...register("nome", { required: true, maxLength: 255 })} /><br />
        {errors.nome && <span className="invalid">Digite um nome válido!</span>}<br />

        <label htmlFor="tipo">Tipo</label><br />
        <input type="text" id="tipo" {...register("tipo", { required: true, maxLength: 255 })} /><br />
        {errors.tipo && <span className="invalid">Digite um tipo válido!</span>}<br />

        <label htmlFor="altura">Altura</label><br />
        <input type="number" id="altura" {...register("altura", { required: true, maxLength: 255 })} /><br />
        {errors.altura && <span className="invalid">Digite um altura válido!</span>}<br />

        <label htmlFor="peso">Peso</label><br />
        <input type="number" id="peso" {...register("peso", { required: true, maxLength: 255 })} /><br />
        {errors.peso && <span className="invalid">Digite um peso válido!</span>}<br />

        <label htmlFor="email">E-mail</label><br />
        <input type="email" id="email" {...register("email", { required: true, pattern: patternEmail })} /><br />
        {errors.email && <span className="invalid">Digite um e-mail válido!</span>}<br />

        <button type="submit">Cadastrar</button><br />
      </form>
    </div>
  )
}