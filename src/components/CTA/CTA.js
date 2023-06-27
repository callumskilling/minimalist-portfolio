import { Link } from "react-router-dom"
import "./CTA.css"
import { GoToTop } from "../../utils/GoToTop"

const CTA = () => {
    return (
        <>
            <div className="ctaContainer">
                <h2>Interested in doing a project together?</h2>
                <div className="divLine"></div>
                <Link to="/contact" className="contactMeLink" onClick={GoToTop()}><div className="simpleLink">CONTACT ME</div></Link>
            </div>
        </>
    )
}

export { CTA }