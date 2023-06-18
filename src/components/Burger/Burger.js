import "./Burger.css"

const Burger = ({ navMenuOpen, setNavMenuOpen }) => {
    const handleClick = () => {
        setNavMenuOpen(!navMenuOpen);
    }

    return (
        <>
            <button className="mobile_nav_toggle" aria-controls="nav_links" aria-expanded={navMenuOpen} onClick={handleClick}><span className="sr_only">Menu</span></button>
        </>
    )
}

export { Burger }