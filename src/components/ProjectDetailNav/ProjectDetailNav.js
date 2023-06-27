import { portfolioData } from '../../assets/data/portfolioData';
import "./ProjectDetailNav.css"
import ArrowLeft from "../../assets/images/icons/arrow-left.svg";
import ArrowRight from "../../assets/images/icons/arrow-right.svg";
import { Link } from 'react-router-dom';
import { GoToTop } from '../../utils/GoToTop';

const ProjectDetailNav = (props) => {
    const { project } = props;
    const projectIndex = portfolioData.findIndex(element => project.project_title === element.project_title);
    const numProjects = Object.keys(portfolioData).length

    const previousProject = (projectIndex) => {
        if ((projectIndex - 1) < 0) {
            return portfolioData[numProjects - 1]
        } else {
            return portfolioData[projectIndex - 1]
        }
    }

    const nextProject = (projectIndex) => {
        if ((projectIndex + 1) >= numProjects) {
            return portfolioData[0]
        } else {
            return portfolioData[projectIndex + 1]
        }
    }
    return (
        <>
            <div className="projectDetailNavContainer">
                <div className="previousProjectContainer projectNavButton">
                    <Link to={`http://localhost:3000/portfolio/${previousProject(projectIndex).project_title}`} className='projectLink prevProjectLink' onClick={GoToTop()}>
                        <img className='leftArrow' src={ArrowLeft} alt=''/>
                        <div className="prevNavText navText">
                            <h3>{previousProject(projectIndex).project_title}</h3>
                            <p className='body1 projectNavButtonSubtitle'>Previous Project</p>
                        </div>
                    </Link>
                </div>

                <div className="nextProjectContainer projectNavButton">
                    <Link to={`http://localhost:3000/portfolio/${nextProject(projectIndex).project_title}`} className='projectLink nextProjectLink' onClick={GoToTop()}>
                        <img className="rightArrow" src={ArrowRight} alt=''/>
                        <div className="nextNavText navText">
                            <h3>{nextProject(projectIndex).project_title}</h3>
                            <p className='body1 projectNavButtonSubtitle'>Next Project</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export { ProjectDetailNav }