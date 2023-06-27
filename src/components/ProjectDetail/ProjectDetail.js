import { portfolioData } from '../../assets/data/portfolioData';
import { Link } from "react-router-dom";
import "./ProjectDetail.css"
import { GoToTop } from '../../utils/GoToTop';

const ProjectDetail = (props) => {
    const { project } = props;
    const { hero_desktop, hero_desktop_2x, hero_tablet, hero_tablet_2x, hero_mobile, hero_mobile_2x } = project.image_paths.detail_hero;
    const { preview1_desktop, preview1_desktop_2x, preview1_tablet, preview1_tablet_2x, preview1_mobile, preview1_mobile_2x } = project.image_paths.preview1;
    const { preview2_desktop, preview2_desktop_2x, preview2_tablet, preview2_tablet_2x, preview2_mobile, preview2_mobile_2x } = project.image_paths.preview2;
    return (
        <>
            <div className="projectDetailContainer">
                <picture className="projectHeroDetailImage">
                    <source media="(min-width: 1440px)"
                        srcSet={`${hero_desktop} 1110w, ${hero_desktop_2x} 2220w`}
                    />
                    <source media="(min-width: 768px)"
                        srcSet={`${hero_tablet} 688w, ${hero_tablet_2x} 1376w`}
                    />
                    <source srcSet={`${hero_mobile} 311w, ${hero_mobile_2x} 622w`}
                    />
                    <img src={`${hero_desktop_2x}`} alt={`Priview image of ${project.project_title}`} />
                </picture>
                <div className="projectContainer">
                    <div className="projectInfoWrapper">
                                            <div className="projectInfo" id='projectDetailInfo'>
                        <h1>{project.project_title}</h1>
                        <p className="body2" id='projectDescription'>{project.project_description}</p>
                        <div className="tagsContainer">
                            <p className="body2" id="projectTags">{project.project_tags}</p>
                            <p className="body2" id="languageTags">{project.language_tags}</p>
                        </div>
                        <Link to=""><div className="simpleLink">VISIT WEBSITE</div></Link>
                    </div>
                    </div>

                    <div className="projectBackground">
                        <h3>Project Background</h3>
                        <p className="body2">{project.project_background}</p>
                    </div>
                    <div className="staticPreviews">
                        <h3>Static Previews</h3>
                        <picture className="projectPreviewImage">
                            <source media="(min-width: 1440px)"
                                srcSet={`${preview1_desktop} 1110w, ${preview1_desktop_2x} 2220w`}
                            />
                            <source media="(min-width: 768px)"
                                srcSet={`${preview1_tablet} 688w, ${preview1_tablet_2x} 1376w`}
                            />
                            <source srcSet={`${preview1_mobile} 311w, ${preview1_mobile_2x} 622w`}
                            />
                            <img src={`${preview1_desktop_2x}`} alt={`Priview image of ${project.project_title}`} />
                        </picture>
                        <picture className="projectPreviewImage">
                            <source media="(min-width: 1440px)"
                                srcSet={`${preview2_desktop} 1110w, ${preview2_desktop_2x} 2220w`}
                            />
                            <source media="(min-width: 768px)"
                                srcSet={`${preview2_tablet} 688w, ${preview2_tablet_2x} 1376w`}
                            />
                            <source srcSet={`${preview2_mobile} 311w, ${preview2_mobile_2x} 622w`}
                            />
                            <img src={`${preview2_desktop_2x}`} alt={`Priview image of ${project.project_title}`} />
                        </picture>
                    </div>
                </div>

            </div>
        </>
    )
}

export { ProjectDetail }