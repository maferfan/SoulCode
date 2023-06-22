import { useState } from "react";
import { Form, Row, Col, Button, FormCheck, FormGroup, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Progamadores.css"


export function Programadores() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [mensagem, setMensagem] = useState();
  let msg = '';

  function onSubmit(data) {

    setMensagem(
      `
      Nome: ${data.nome}
      E-mail: ${data.email} 
      Telefone: ${data.telefone}
      Estado: ${data.estado}
      Cidade: ${data.cidade}
      Nome: ${data.nome}
    `)
    handleShow();
  }

  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <>
      < Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Dados de Cadastro</Modal.Title>
        </Modal.Header>
        <Modal.Body>{mensagem}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal >
      <div className="programadores">
        <Form onSubmit={handleSubmit(onSubmit)} className="form-programadores">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNome">
              <Form.Label>Nome completo</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" {...register("nome", { required: true, maxLength: 255 })} />
              {errors.nome && <span className="invalid">Digite um nome válido</span>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" {...register("email", { required: true, maxLength: 255 })} />
              {errors.email && <span className="invalid">Digite um e-mail válido</span>}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" placeholder="Digite seu telefone" {...register("telefone", { required: true, maxLength: 255 })} />
              {errors.telefone && <span className="invalid">Digite um telefone válido</span>}
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridEstado">
              <Form.Label>Estado</Form.Label>
              <Form.Control type="text" placeholder="Digite seu estado de residêncial" {...register("estado", { required: true, maxLength: 255 })} />
              {errors.estado && <span className="invalid">Digite um estado válido</span>}
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridCidade" >
              <Form.Label>Cidade</Form.Label>
              <Form.Control type="text" placeholder="Digite sua cidade de residência" {...register("cidade", { required: true, maxLength: 255 })} />
              {errors.cidade && <span className="invalid">Digite uma cidade válido</span>}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridExperiencia">
              <Form.Label>Nível de experiência</Form.Label>
              <Form.Select  {...register("esperiencia", { required: true, maxLength: 255 })}>
                <option disabled selected value="">Selecione...</option>
                <option>Junior</option>
                <option>Pleno</option>
                <option>Senior</option>
              </Form.Select>
              {errors.esperiencia && <span className="invalid">Selecione uma opção</span>}

            </Form.Group>
            <Form.Group as={Col} controlId="formPortfolio" className="mb-3">
              <Form.Label>Portfólio </Form.Label>
              <Form.Control type="file" {...register("file", { required: true })} />
              {errors.file && <span className="invalid">Escolha um arquivo</span>}
            </Form.Group>
          </Row>


          <Row className="mb-3">

            <FormGroup as={Col} controlId="formCurso">
              <Form.Label>Curso </Form.Label>
              <Form.Control type="text" {...register("curso", { required: true, maxLength: 255 })} />
              {errors.curso && <span className="invalid">Digite um curso válido</span>}
            </FormGroup>
            <FormGroup as={Col} controlId="formInstituicao">
              <Form.Label>Instituição </Form.Label>
              <Form.Control type="text" {...register("instituicao", { required: true, maxLength: 255 })} />
              {errors.instituicao && <span className="invalid">Digite uma instituição válido</span>}
            </FormGroup>
            <FormGroup as={Col} controlId="formConclusao">
              <Form.Label>Ano de conclusão </Form.Label>
              <Form.Control type="date" {...register("conclusao", { required: true })} />
              {errors.conclusao && <span className="invalid">Selecione uma data válida</span>}

            </FormGroup>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAreasInteresse">
              <Form.Label>Areas de interesse</Form.Label>
              <div className="checkb">
                <div>
                  <Form.Check
                    label="Back end"
                    {...register("backend")}
                    type="checkbox"
                    id="backend"
                  />
                  <Form.Check
                    label="Front end"
                    {...register("frontend")}
                    type="checkbox"
                    id="frontend"
                  />
                  <Form.Check
                    label="Mobile"
                    {...register("mobile")}
                    type="checkbox"
                    id="mobile"
                  />
                </div>
                <div>
                  <Form.Check
                    label="Inteligência artificial"
                    {...register("ia")}
                    type="checkbox"
                    id="ia"
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAreasInteresse">
              <Form.Label>Habilidades técnicas</Form.Label>
              <div className="checkb">
                <div>
                  <Form.Check
                    label="Java Script"
                    {...register("javascript")}
                    type="checkbox"
                    id="javascript"
                  />
                  <Form.Check
                    label="HTML"
                    {...register("html")}
                    type="checkbox"
                    id="html"
                  />
                  <Form.Check
                    label="CSS"
                    {...register("css")}
                    type="checkbox"
                    id="css"
                  />
                </div>
                <div>
                  <Form.Check
                    label="React"
                    {...register("react")}
                    type="checkbox"
                    id="react"
                  />
                  <Form.Check
                    label="Node.js"
                    {...register("node")}
                    type="checkbox"
                    id="node"
                  />
                </div>
              </div>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>
      </div>
    </>
  )
}