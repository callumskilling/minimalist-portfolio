import { Link } from "react-router-dom";

const ProjectCardIndex = (props) => {
    const {project} = props;
    const projectPage = `http://localhost:3000/portfolio/${project.project_title}`
    return (
        <>
            <div className="container">
                <h1>{project.project_title}</h1>
                <p>{project.project_description}</p>
                <Link to={projectPage}><button>View Project</button></Link>
            </div>
        </>
    )
}

export { ProjectCardIndex }