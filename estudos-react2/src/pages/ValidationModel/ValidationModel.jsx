import { useForm } from "react-hook-form"
import { Modal, Button } from 'react-bootstrap'
import "./ValidationModel.css"
import { useState } from "react";


export function Validation() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    function validar(newObject) {
        setShowModal(true);
        setModalData(newObject);
    }
    
    return (
        <div className="validation" >
            <form onSubmit={handleSubmit(validar)}>
                <h2>Equipamento</h2>
                <div className="box">
                    <div class="box2 mb-4">
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" className="campo" {...register("nome", { required: true, maxLength: 255 })} />
                        {errors.nome && <small>Digite um nome válido</small>}
                    </div>

                    <div class="box2 mb-4">
                        <label for="numeroS" >Numero de série</label>
                        <input type="number" id="numeroS" className="campo" {...register("numeroS", { required: true, maxLength: 255 })} />
                        {errors.numeroS && <small>Digite um número de série válido</small>}
                    </div>
                </div>

                <div className="box">
                    <div class="box2 mb-4">
                        <label for="descricao" >Descricao</label>
                        <input type="text" id="descricao" className="campo" {...register("descricao")} />
                    </div>

                    <div class="box2 mb-4">
                        <label for="dataEntrega">Data de entrega</label>
                        <input type="date" id="dataEntrega" className="date-status" {...register("dataEntrega", { required: true })}></input>
                        {errors.dataEntrega && <small>Digite uma data de entrega válida</small>}
                    </div>
                </div>

                <div className="box">
                    <div class="box2 mb-4">
                        <label for="previsaoEntrega">Previsão de entrega</label>
                        <input type="date" id="previsaoEntrega" className="date-status" {...register("previsaoEntrega", { required: true })}></input>
                        {errors.previsaoEntrega && <small>Digite uma previsão de entrega válida</small>}
                    </div>

                    <div class="box2 mb-4">
                        <div>Status</div>
                        <select className="date-status" id="status" {...register("status", { required: true })}>
                            <option value="selecione" disabled>Selecione o status</option>
                            <option value="Pendente">Pendente</option>
                            <option value="Concluído">Concluído</option>
                            <option value="Entregue">Entregue</option>
                        </select>
                    </div>
                    {errors.status && <small>Selecione o status</small>}
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-dark btn-block mb-4 submit">Submeter</button>
                </div>
            </form>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Dados do Equipamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Nome: {modalData.nome}</p>
                    <p>Numero de série: {modalData.numeroS}</p>
                    <p>Descrição: {modalData.descricao}</p>
                    <p>Data de entrega: {modalData.dataEntrega}</p>
                    <p>Previsão de entrega: {modalData.previsaoEntrega}</p>
                    <p>Status: {modalData.status}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </div>)



}