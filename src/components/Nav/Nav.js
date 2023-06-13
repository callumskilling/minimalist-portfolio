import { NavLink } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/contactme">Contact Me</NavLink></li>
            </ul>
        </nav>
    )
}


export {Nav}