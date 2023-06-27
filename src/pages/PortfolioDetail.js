import { ProjectDetailNav } from "../components/ProjectDetailNav/ProjectDetailNav"
import { useParams } from "react-router-dom";
import { portfolioData } from '../assets/data/portfolioData';
import { ProjectDetail } from "../components/ProjectDetail/ProjectDetail";
import { CTA } from "../components/CTA/CTA";
import { NotFound } from "./NotFound";




const PortfolioDetail = () => {
    const { projectName } = useParams();
    const project = portfolioData.find(project => projectName === project.project_title);
    if (project) {
        return (
            <>
                <ProjectDetail project={project}/>
                <ProjectDetailNav project={project} />
                <CTA />
            </>
        )        
    } else {
        return (
            <>
                <NotFound />
            </>
        )
    }

}

export { PortfolioDetail };