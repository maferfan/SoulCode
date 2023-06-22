import { Container } from "./ProductList.js"

export function ProductList({nome,descrição,preço}){
    return (<>
    <Container>
        <div className="card">
            <img src="https://picsum.photos/200/300"/>
            <h1>{nome}</h1>
            <p>{descrição}</p>
            <p>{preço}</p>
        </div>
    </Container>
</>)
}