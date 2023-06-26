import { ProjectCardIndex } from '../components/ProjectCardIndex/ProjectCardIndex'
import { portfolioData } from '../assets/data/portfolioData';
import { CTA } from '../components/CTA/CTA';

const PortfolioIndex = () => {
    return (
        <>
            {portfolioData.map((project) => (
                <ProjectCardIndex key={project.project_title} project={project} />
            )
            )}
            <CTA />
        </>
    )
}

export { PortfolioIndex };