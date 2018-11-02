import React from "react";

const ProjectCard = (props) => (
    <div className="col-md-4 float-left clearfix">
        <div class="card clearfix">
            <div class="card-body d-flex flex-column">
                <h1 class="card-title">{props.title}</h1>
                <p class="card-text">{props.desc}</p>
                <a href={props.dep_url} target="_blank" class="btn-proj btn mr-1 clearfix col-sm-10 mx-auto mt-2">See the Project</a>
                <a href={props.git_url} target="_blank" class="btn-proj btn ml-1 clearfix col-sm-10 mx-auto mt-2">See the Code</a>
            </div>
        </div>
    </div>
);
export default ProjectCard;



