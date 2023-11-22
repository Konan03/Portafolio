import React from "react";
import CardProject from "./card/cardProject";
import "../../css/project.css"
import projectsData from "../project/card/projects.json"

function Project(){
    return( 
        <section className="container">
            {projectsData.map((project) => (
            <CardProject
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                className="container__card"
            />
        ))}
            
        </section>
    );
}

export default Project