import "./Cadastro.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';

// Nome completo
// Endereço de e-mail
// Telefone
// Estado de residência
// Cidade de residência
// Áreas de interesse (utilize um acervo de campos de check)
// Nível de experiência (utilize um campo de seleção -> júnior, pleno, sênior)
// Portfólio (opção para incluir link)
// Habilidades técnicas (utilize um acervo de campos de check)
// Formação acadêmica


export function Cadastro() {

    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({})


    const { register, handleSubmit, formState: { errors } } = useForm("")

    function onSubmit(campo) {
        setShow(true)
        setFormData(campo)
    }

    const handleCepChange = async (event) => {
        const cep = event.target.value.replace(/\D/g, ''); // remove tudo que não é número
        if (cep.length === 8) { // valida se o CEP tem 8 dígitos
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setCidade(data.localidade);
            setEstado(data.uf);
            setLogradouro(data.logradouro);
        }
    }

    return (
        <div className="container-cadastro">
            <Form className="cadastro-form" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" {...register("nome", { required: true })} />
                    {errors.nome && <div>*Campo obrigatório</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" {...register("email", { required: true })} />
                    {errors.email && <div>*Campo obrigatório</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="tel" placeholder="Telefone" {...register("telefone", { required: true })} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" onChange={handleCepChange} />
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type="text" value={`${cidade} - ${estado} - ${logradouro}`} readOnly {...register("cep", { required: true })} /><br />
                </Form.Group>

                <Form.Group className="my-2 d-flex justify-content-around" style={{ gap: 30 }} controlId="formBasicCheckbox">
                    <div className="d-flex flex-column text-center">
                        <Form.Label>Áreas de interesse</Form.Label>
                        <Form.Check type="checkbox" label="Front-end" />
                        <Form.Check type="checkbox" label="Back-end" />
                        <Form.Check type="checkbox" label="Mobile" />
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <Form.Label>Nível de experiência</Form.Label>
                        <select className="p-4">
                            <option disabled selected>Selecione uma opção</option>
                            <option>Programador Júnior</option>
                            <option>Programador Pleno</option>
                            <option>Programador Sênior</option>
                        </select>
                    </div>
                </Form.Group>

                <Form.Group className="mt-3 text-center" controlId="name">
                    <Form.Label>Portfólio</Form.Label>
                    <Form.Control type="text" placeholder="Enter portfolio" />
                </Form.Group>

                <Form.Group className="mt-4 d-flex justify-content-around" style={{ gap: 30 }} controlId="formBasicCheckbox">
                    <div className="d-flex flex-column text-center">
                        <Form.Label>Habilidades técnicas</Form.Label>
                        <div className="mt-3 d-flex" style={{ gap: 20 }}>
                            <Form.Check type="checkbox" label="JavaScript" />
                            <Form.Check type="checkbox" label="React" />
                            <Form.Check type="checkbox" label="Node" />
                            <Form.Check type="checkbox" label="Python" />
                            <Form.Check type="checkbox" label="Angular" />
                            <Form.Check type="checkbox" label="Java" />
                        </div>
                    </div>
                </Form.Group>

                <Button className="mt-5 d-flex justify-content-center" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Modal show={show} onHide={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Nome:</strong> {formData.nome}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Telefone:</strong> {formData.telefone}</p>
                    <p><strong>Endereço:</strong> {formData.logradouro}, {formData.cidade}, {formData.estado}</p>
                    <p><strong>Áreas de interesse:</strong> {formData.areasDeInteresse}</p>
                    <p><strong>Nível de experiência:</strong> {formData.nivelDeExperiencia}</p>
                    <p><strong>Portfólio:</strong> {formData.portfolio}</p>
                    <p><strong>Habilidades técnicas:</strong> {formData.habilidadesTecnicas}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}