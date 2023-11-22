import React from "react";

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import "../../../css/cardProject.css"

const { Meta } = Card;

const CardProject = ({title, description, image, alt}) => (
  <Card
    className="cardProject"
    cover={
      <img
        alt={alt || image}
        src={image}
      />
    }
  >
    <Meta
      className="metaTitle"
      title={<span>{title}</span>}
      description={<span >{description}</span> }
    />
  </Card>
);

export default CardProject;
