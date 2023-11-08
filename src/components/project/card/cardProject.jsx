import React from "react";

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const CardProject = () => (
  <Card
    style={{ width: 300, backgroundColor: 'rgb(41, 39, 39)', fontFamily: "'Quicksand', sans-serif"}}
    cover={
      <img
        alt="example"
        src="\img\screenMenuApp.png"
      />
    }
  >
    <Meta
      title={<span style={{ color: 'white'}}>Menu App</span>} /* Cambia 'red' al color deseado */
      description={<span style={{ color: 'white' }}>This is the description</span> /* Cambia 'blue' al color deseado */}
    />
  </Card>
);

export default CardProject;
