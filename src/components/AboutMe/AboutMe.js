import "./AboutMe.css"
import ProfileMobile from "../../assets/images/homepage/mobile/image-homepage-profile.jpg"
import ProfileMobile2x from "../../assets/images/homepage/mobile/image-homepage-profile@2x.jpg"
import ProfileTablet from "../../assets/images/homepage/tablet/image-homepage-profile.jpg"
import ProfileTablet2x from "../../assets/images/homepage/tablet/image-homepage-profile@2x.jpg"
import ProfileDesktop from "../../assets/images/homepage/desktop/image-homepage-profile.jpg"
import ProfileDesktop2x from "../../assets/images/homepage/desktop/image-homepage-profile@2x.jpg"
import { Link } from "react-router-dom"

const AboutMe = () => {
    return (
        <>
            <div className="aboutMeContainer">
                <picture className="profileImage">
                    <source media="(min-width: 1440px)"
                            srcSet={`${ProfileDesktop} 540w, ${ProfileDesktop2x} 1080w`} 
                    />
                    <source media="(min-width: 768px)"
                            srcSet={`${ProfileTablet} 281w, ${ProfileTablet2x} 562w`}
                    />
                    <source srcSet={`${ProfileMobile} 311w, ${ProfileMobile2x} 622w`}
                    />
                    <img src={`${ProfileMobile}`} alt="Side profile headshot of Alex Spencer"/>
                </picture>
                <div className="aboutMeSection">
                    <h2 id="aboutMe">About Me</h2>
                    <p className="body1">I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
                    <Link to="/portfolio"><div className="simpleLink">GO TO PORTFOLIO</div></Link>
                </div>
            </div>
        </>
    )
}

export { AboutMe }