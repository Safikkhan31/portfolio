import { projects as projects_data, github_user} from "../../db.js";
import Project from "./Project.jsx";

export function Projects(){
    return (
        <div>
            {
                projects_data.map((project_item) => {
                    return <Project title={project_item.title} description={project_item.description} details={project_item.details} urls={project_item.urls} username={github_user} repo={project_item.github_repo} key={Date.now()}/>
                })
            }
        </div>
    )
}