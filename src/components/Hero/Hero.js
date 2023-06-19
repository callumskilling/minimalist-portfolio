import "./Hero.css"
import ArrowIcon from "../../assets/images/icons/down-arrows.svg"
import HeroBgMobile from "../../assets/images/homepage/mobile/image-homepage-hero.jpg"
import HeroBgMobile2x from "../../assets/images/homepage/mobile/image-homepage-hero@2x.jpg"
import HeroBgTablet from "../../assets/images/homepage/tablet/image-homepage-hero.jpg"
import HeroBgTablet2x from "../../assets/images/homepage/tablet/image-homepage-hero@2x.jpg"
import HeroBgDesktop from "../../assets/images/homepage/desktop/image-homepage-hero.jpg"
import HeroBgDesktop2x from "../../assets/images/homepage/desktop/image-homepage-hero@2x.jpg"

const Hero = () => {
    return (
        <>
            <div className="heroContainer">
                    <img className="heroImage"
                        srcset={`${HeroBgMobile} 311w, ${HeroBgMobile2x} 622w, ${HeroBgTablet} 688w, ${HeroBgTablet2x} 1376w, ${HeroBgDesktop} 1110w, ${HeroBgDesktop2x} 2220w`}
                        src={`${HeroBgMobile}`}
                        alt="Image of a desktop showing a portfolio project" />
                <div className="heroText">
                    <h1 className="heroTitle">Hey, I'm Alex Spencer and I love building beautiful websites</h1>
                    <button className="aboutMeButton" type="button">
                        <span className="buttonIcon">
                            <img src={ArrowIcon} className="arrowIcon" />
                        </span>
                        <span className="buttonText">ABOUT ME</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export { Hero }