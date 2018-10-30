import React from "react";

const ProjectCard = (props) => (
    <div className="col-4 float-left clearfix">
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">{props.title}</h1>
                <p class="card-text">{props.desc}</p>
                <a href={props.dep_url} target="_blank" class="btn-proj btn mr-1">See the Project</a>
                <a href={props.git_url} target="_blank" class="btn-proj btn ml-1">See the Code</a>
            </div>
        </div>
    </div>
);
export default ProjectCard;



