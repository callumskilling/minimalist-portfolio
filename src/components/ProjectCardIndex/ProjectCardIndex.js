import { Link } from "react-router-dom";
import "./ProjectCardIndex.css"

const ProjectCardIndex = (props) => {
    const {project} = props;
    const {hero_desktop, hero_desktop_2x, hero_tablet, hero_tablet_2x, hero_mobile, hero_mobile_2x} = project.image_paths.hero;

    return (
        <>
            <div className="projectCardIndexContainer">
                <picture className="projectHeroImage">
                    <source media="(min-width: 1440px)"
                        srcSet={`${hero_desktop} 1110w, ${hero_desktop_2x} 2220w`}
                    />
                    <source media="(min-width: 768px)"
                        srcSet={`${hero_tablet} 688w, ${hero_tablet_2x} 1376w`}
                    />
                    <source srcSet={`${hero_mobile} 311w, ${hero_mobile_2x} 622w`}
                    />
                    <img src={`${hero_desktop_2x}`} alt={`Screenshot of ${project.project_title} project`} />
                </picture>
                <div className="projectInfo">
                    <h1 className="projectTitle">{project.project_title}</h1>
                    <p className="body2">{project.project_description}</p>
                    <Link to={`/minimalist-portfolio/portfolio/${project.project_title}`}><div className="simpleLink">VIEW PROJECT</div></Link>                    
                </div>
            </div>
        </>
    )
}

export { ProjectCardIndex }