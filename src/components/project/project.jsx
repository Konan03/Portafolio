import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/project.css";
import projectsData from "../project/card/projects.json";

function Project() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="project-container">
      <Slider {...settings}>
        {projectsData.map((project, index) => (
          <div key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-descripcion">{project.description}</p>
            <div className="project-images">
              {project.images.map((image, imageIndex) => (
                <img key={imageIndex} src={image} alt={project.alt} />
              ))}
            </div>
            <a className="repo" href={project.repo} target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Project;
