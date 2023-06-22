
import { Link, Outlet } from "react-router-dom"


export function Home() {
    return (<>
        <div>
            <h1>Home</h1>
        </div>
        <ul>
            <li><Link to="1">Section 1</Link></li>
            <li><Link to="2">Section 2</Link></li>
            <li><Link to="3">Section 3</Link></li>
        </ul>
        <Outlet />
    </>)

}
