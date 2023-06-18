import { NavLink } from "react-router-dom"
import "./Menu.css"

const Menu = ({ navMenuOpen }) => {
    return (
        <>
            <nav id="nav_links" data-visible={navMenuOpen}>
                <ul>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
                    <li><NavLink to="/contact">CONTACT ME</NavLink></li>
                </ul>
            </nav>
        </>
    )
} 

export { Menu }