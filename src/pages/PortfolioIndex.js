import { ProjectCardIndex } from '../components/ProjectCardIndex/ProjectCardIndex'
import projects from '../assets/data/projectData.json';

const PortfolioIndex = () => {
    return (
        <>
            <h1>Portfolio Index</h1>
            {projects.map((project) => (
                <ProjectCardIndex key={project.project_title} project={project} />
            )
            )}
        </>
    )
}

export { PortfolioIndex };