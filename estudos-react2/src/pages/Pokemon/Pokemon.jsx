import { useForm } from "react-hook-form"
import "./Pokemon.css"

export function Pokemon() {

    //expressão regular
    const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const { register, handleSubmit, formState: {errors} } = useForm()

    function onSubmit(data) {
        if (data.nome === "venom"){
            alert('simbionte? aí falou minha língua.')
        }else if (data.nome === "" ){
            alert('Vai ficar em cima do muro, cagão?')
        }else{
            alert('heróis aqui não.')
        }
    }


    return (

        <div className="pokemon" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-outline mb-4">
                    <label class="form-label" for="nome">Nome</label>
                    <input type="text" id="nome" class="formControl" {...register("nome",{required:true, maxLength: 15})} />
                    {errors.nome && <small>Digite um nome válido</small>}
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="poder" >Poder</label>
                    <input type="text" id="poder" class="formControl" {...register("poder",{required:true})} />
                    {errors.poder && <small>Digite um poder válido</small>}
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="Fraqueza" >Fraqueza</label>
                    <input type="text" id="Fraqueza" class="formControl" {...register("fraqueza",{required:true})} />
                    {errors.fraqueza && <small>Digite uma fraqueza válida</small>}
                </div>

                <div class="form-a  mb-4">
                    <label class="form-label" for="História" >História</label>
                    <textarea type="text" id="História" class="formArea" {...register("area",{required:true})}></textarea>
                </div>

                <div class="text-center ">
                    <button type="submit" class="btn btn-dark btn-block mb-4 submit">Entrar</button>
                </div>
            </form>
        </div>
    )
}