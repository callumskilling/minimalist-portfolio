import { useParams } from "react-router-dom";

const PortfolioDetail = () => {
    const { projectName } = useParams();
    return <h1>Portfolio Detail: {projectName}</h1>
}

export {PortfolioDetail};