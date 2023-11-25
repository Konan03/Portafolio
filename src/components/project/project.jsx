import React from "react";
import CardProject from "./card/cardProject";
import "../../css/project.css"
import projectsData from "../project/card/projects.json"

function Project() {
    return (
        <section className="container">
          {projectsData.map((project) => (
            <CardProject
              key={project.id}
              title={project.title}
              description={project.description}
              images={project.images} // Asegúrate de que esto se corresponde con tu JSON actualizado
              alt={project.alt}
              repo={project.repo}
            />
          ))}
        </section>
      );
}

export default Project;