import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import { MenuAll } from "../../components/Menu/MenuAll/MenuAll"



export function Root(){
    return(
    <div className="root">
        <MenuAll/>
        <Outlet/>     
    </div>
    )
}