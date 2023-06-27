import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"
import { Burger } from "../Burger/Burger"
import { Menu } from "../Menu/Menu"
import "./Nav.css"
import { useState } from "react"
import { GoToTop } from "../../utils/GoToTop"

const Nav = () => {
    const [navMenuOpen, setNavMenuOpen] = useState(false)
    return (
        <div className="navBar">
            <Link to="/minimalist-portfolio/" onClick={GoToTop()}><img src={Logo} alt="logo" className="logo" /></Link>
            <Burger navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
            <Menu navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
        </div>

    )
}


export { Nav }