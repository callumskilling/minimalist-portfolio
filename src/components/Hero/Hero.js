import "./Hero.css"
import ArrowIcon from "../../assets/images/icons/down-arrows.svg"
import HeroBgMobile from "../../assets/images/homepage/mobile/image-homepage-hero.jpg"
import HeroBgMobile2x from "../../assets/images/homepage/mobile/image-homepage-hero@2x.jpg"
import HeroBgTablet from "../../assets/images/homepage/tablet/image-homepage-hero.jpg"
import HeroBgTablet2x from "../../assets/images/homepage/tablet/image-homepage-hero@2x.jpg"
import HeroBgDesktop from "../../assets/images/homepage/desktop/image-homepage-hero.jpg"
import HeroBgDesktop2x from "../../assets/images/homepage/desktop/image-homepage-hero@2x.jpg"
import { HashLink } from "react-router-hash-link"

const Hero = () => {
    return (
        <>
            <div className="heroContainer">
                <picture className="heroImage">
                    <source media="(min-width: 1440px)"
                        srcSet={`${HeroBgDesktop} 1110w, ${HeroBgDesktop2x} 2220w`}
                    />
                    <source media="(min-width: 768px)"
                        srcSet={`${HeroBgTablet} 688w, ${HeroBgTablet2x} 1376w`}
                    />
                    <source srcSet={`${HeroBgMobile} 311w, ${HeroBgMobile2x} 622w`}
                    />
                    <img src={`${HeroBgMobile}`} alt="Desktop showing a portfolio project" />
                </picture>
                <div className="heroText">
                    <h1 className="heroTitle">Hey, I'm Alex Spencer and I love building beautiful websites</h1>
                    <HashLink smooth to="/#aboutMe">
                        <div className="aboutMeButton">
                            <span className="buttonIcon">
                                <img src={ArrowIcon} className="arrowIcon" alt="down arrow to About Me section"/>
                            </span>
                            <span className="buttonText">ABOUT ME</span>

                        </div>
                    </HashLink>
                </div>
            </div>
        </>
    )
}

export { Hero }