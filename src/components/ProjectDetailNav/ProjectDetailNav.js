import projects from '../../assets/data/projectData.json';

const ProjectDetailNav = (props) => {
    const { project } = props;
    const projectIndex = projects.findIndex(element => project.project_title === element.project_title);
    const numProjects = Object.keys(projects).length
    
    const previousProject = (projectIndex) => {
        if ((projectIndex - 1) < 0) {
            return projects[numProjects - 1]
        } else {
            return projects[projectIndex - 1]
        }
    }

    const nextProject = (projectIndex) => {
        if ((projectIndex + 1) >= numProjects) {
            return projects[0]
        } else {
            return projects[projectIndex + 1]
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