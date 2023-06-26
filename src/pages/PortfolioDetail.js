import { ProjectDetailNav } from "../components/ProjectDetailNav/ProjectDetailNav"
import { useParams } from "react-router-dom";
import {portfolioData} from '../assets/data/portfolioData';



const PortfolioDetail = () => {
    const { projectName } = useParams();
    const project = portfolioData.find(project => projectName === project.project_title)
    return (
        <>
            <h1>Portfolio Detail: {project.project_title}</h1>
            <p>{project.project_description}</p>
            <ProjectDetailNav project={project}/>
        </>
    )
}

export { PortfolioDetail };