import {portfolioData} from '../../assets/data/portfolioData';

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
            <div className="container">
                <h1>{nextProject(projectIndex).project_title}</h1>
                <h2>Next Project</h2>
                <br></br>
                <h1>{previousProject(projectIndex).project_title}</h1>
                <h2>Previous Project</h2>
            </div>
        </>
    )
}

export { ProjectDetailNav }