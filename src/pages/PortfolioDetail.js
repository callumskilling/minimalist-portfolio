import { ProjectDetailNav } from "../components/ProjectDetailNav/ProjectDetailNav"
import { useParams } from "react-router-dom";
import { portfolioData } from '../assets/data/portfolioData';
import { ProjectDetail } from "../components/ProjectDetail/ProjectDetail";
import { CTA } from "../components/CTA/CTA"



const PortfolioDetail = () => {
    const { projectName } = useParams();
    const project = portfolioData.find(project => projectName === project.project_title)
    return (
        <>
            <ProjectDetail project={project}/>
            <ProjectDetailNav project={project} />
            <CTA />
        </>
    )
}

export { PortfolioDetail };