import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"
import GitHub from "../../assets/images/icons/github.svg"
import Twitter from "../../assets/images/icons/twitter.svg"
import LinkedIn from "../../assets/images/icons/linkedin.svg"
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="footerContainer">
                <div className="footerLogo">
                <img src={Logo} alt="logo" className="logo" />
                </div>
                <div className="footerNav">
                    <Link to="">HOME</Link>
                    <Link to="/portfolio">PORTFOLIO</Link>
                    <Link to="/contact">CONTACT ME</Link>
                </div>
                <div className="socialMediaIcons">
                    <img src={GitHub} alt="Github Logo" className="socialMediaIcon" />
                    <img src={Twitter} alt="Twitter Logo" className="socialMediaIcon" />
                    <img src={LinkedIn} alt="LinkedIn Logo" className="socialMediaIcon" />
                </div>

            </div>
        </>
    )
}

export { Footer }