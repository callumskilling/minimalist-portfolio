import { NavLink } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"
import "./Nav.css"

const Nav = () => {
    return (
        <div className="navBar">
            <img src = {Logo} alt="logo" className="logo"/>
            <nav>
                <ul>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
                    <li><NavLink to="/contact">CONTACT ME</NavLink></li>
                </ul>
            </nav>
        </div>

    )
}


export { Nav }