import Logo from "../../assets/images/logo.svg"
import { Burger } from "../Burger/Burger"
import { Menu } from "../Menu/Menu"
import "./Nav.css"
import { useState } from "react"

const Nav = () => {
    const [navMenuOpen, setNavMenuOpen] = useState(false)
    return (
        <div className="navBar">
            <img src={Logo} alt="logo" className="logo" />
            <Burger navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
            <Menu navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
        </div>

    )
}


export { Nav }