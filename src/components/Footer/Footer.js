import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"
import GitHub from "../../assets/images/icons/github.svg"
import Twitter from "../../assets/images/icons/twitter.svg"
import LinkedIn from "../../assets/images/icons/linkedin.svg"
import "./Footer.css"
import { GoToTop } from "../../utils/GoToTop"

const Footer = () => {
    return (
        <>
            <footer className="footerContainer">
                <div className="footerWrapper">
                    <div className="footerLogo">
                        <Link to="/minimalist-portfolio/" onClick={GoToTop()}><img src={Logo} alt="logo" className="logo footerLogo" /></Link>
                    </div>
                    <div className="footerNav">
                        <Link to="/minimalist-portfolio" onClick={GoToTop()}>HOME</Link>
                        <Link to="/minimalist-portfolio/portfolio" onClick={GoToTop()}>PORTFOLIO</Link>
                        <Link to="/minimalist-portfolio/contact" onClick={GoToTop()}>CONTACT ME</Link>
                    </div>
                    <div className="socialMediaIcons">
                        <img src={GitHub} alt="Github Logo" className="socialMediaIcon" />
                        <img src={Twitter} alt="Twitter Logo" className="socialMediaIcon" />
                        <img src={LinkedIn} alt="LinkedIn Logo" className="socialMediaIcon" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export { Footer }