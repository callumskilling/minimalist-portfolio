import { NavLink } from "react-router-dom"
import "./Menu.css"

const Menu = ({ navMenuOpen, setNavMenuOpen }) => {
    const handleClick = () => {
        setNavMenuOpen(!navMenuOpen);
    }

    return (
        <>
            <nav id="nav_links" data-visible={navMenuOpen}>
                <ul>
                    <li><NavLink to="/minimalist-portfolio/" onClick={handleClick}>HOME</NavLink></li>
                    <li><NavLink to="/minimalist-portfolio/portfolio" onClick={handleClick}>PORTFOLIO</NavLink></li>
                    <li><NavLink to="/minimalist-portfolio/contact" onClick={handleClick}>CONTACT ME</NavLink></li>
                </ul>
            </nav>
        </>
    )
} 

export { Menu }