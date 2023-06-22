import { ProductList } from "../ProductList/ProductList.jsx";
import { Caixa } from "./Product.js"

export function Product(){
    return(<>
        <Caixa>
            <ProductList nome="Matheus" descrição="O melhor produto já feito." preço="R$ 50,00"/>
            <ProductList nome="Ferrazza" descrição="O melhor produto já feito." preço="R$ 50,00"/>
            <ProductList nome="Fantoni" descrição="O melhor produto já feito." preço="R$ 50,00"/>
        </Caixa>
    </>)
}