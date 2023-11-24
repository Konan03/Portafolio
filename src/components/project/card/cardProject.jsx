import React from "react";
import { Card } from 'antd';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../css/cardProject.css"

const { Meta } = Card;

const CardProject = ({title, description, images, alt}) => (
  <Card
    className="cardProject"
    cover={
      <Carousel  showThumbs={false} className="carousel">
        {images && images.length > 0 ? (
          images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={alt || `Imagen ${index + 1}`} />
            </div>
          ))
        ) : (
          <div>
            <img src="path_to_default_image.png" alt="default image" />
          </div>
        )}
      </Carousel>
    }
  >
    <Meta
      className="metaTitle"
      title={<span>{title}</span>}
      description={<span>{description}</span>}
    />
  </Card>
);

export default CardProject;
