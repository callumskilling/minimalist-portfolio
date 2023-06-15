import "./Hero.css"
import ArrowIcon from "../../assets/images/icons/down-arrows.svg"

const Hero = () => {
    return (
        <>
            <div className="heroContainer">
                <div className="heroText">
                    <h1 className="heroTitle">Hey, I'm Alex Spencer and I love building beautiful websites</h1>
                </div>
                <button className="aboutMeButton" type="button">
                    <span className="buttonIcon">
                        <img src= {ArrowIcon} className="arrowIcon"/>
                    </span>
                    <span className="buttonText">ABOUT ME</span>
                </button>
            </div>
        </>
    )
}

export { Hero }