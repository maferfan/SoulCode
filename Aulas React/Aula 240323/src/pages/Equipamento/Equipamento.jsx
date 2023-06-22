import { useForm } from "react-hook-form"

export function Equipamento() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));


  return (
    <div className="equipamento">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="marca">Marca</label> <br />
        <input type="text" name="marca" {...register("marca", { required: true, maxLength: 255 })} /> <br />
        {errors.marca?.type === 'required' && <small role="alert">"Marca" não foi preenchido</small>}
        {errors.marca?.type === 'maxLength' && <small role="alert">O máximo de caracter permitido é 255</small>} <br />

        <label htmlFor="modelo">Modelo</label> <br />
        <input type="text" name="modelo" {...register("modelo", { required: true, maxLength: 255 })} /><br />
        {errors.modelo?.type === 'required' && <small role="alert">"Modelo" não foi preenchido</small>}
        {errors.modelo?.type === 'maxLength' && <small role="alert">O máximo de caracter permitido é 255</small>} <br />

        <label htmlFor="numeroSerie">Número de Serie</label><br />
        <input type="number" name="numeroSerie" {...register("numeroSerie", { required: true, maxLength: 255 })} /><br />
        {errors.numeroSerie?.type === 'required' && <small role="alert">"Número de Serie" não foi preenchido</small>}
        {errors.numeroSerie?.type === 'maxLength' && <small role="alert">O máximo de caracter permitido é 255</small>} <br />


        <label htmlFor="descricao">Descrição</label><br />
        <input type="text" name="descricao" {...register("descricao", { required: true, maxLength: 255 })} /><br />
        {errors.descricao?.type === 'required' && <small role="alert">"Descrição" não foi preenchido</small>}
        {errors.descricao?.type === 'maxLength' && <small role="alert">O máximo de caracter permitido é 255</small>} <br />

        <label htmlFor="dataEntrada">Data de Entrada</label><br />
        <input type="date" name="dataEntrada" {...register("dataEntrada", { required: true })} /><br />
        {errors.dataEntrada?.type === 'required' && <small role="alert">"Data" não foi selecionada</small>} <br />



        <label htmlFor="previsaoChegada">Previsão de Chegada</label><br />
        <input type="date" name="previsaoChegada" {...register("previsaoChegada", { required: true })} /><br />
        {errors.previsaoChegada?.type === 'required' && <small role="alert">"Data" não foi selecionada</small>} <br />


        <label htmlFor="status">Status</label><br />
        <select id="status" name="status"  {...register("status", { required: true })}>
          <option value="" disabled selected>Selecione</option>
          <option value="novo">Pedente</option>
          <option value="usado">Em transporte</option>
          <option value="defeituoso">Entregue</option>
        </select> <br />
        {errors.status?.type === 'required' && <small role="alert">"Status" não foi selecionada</small>} <br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}