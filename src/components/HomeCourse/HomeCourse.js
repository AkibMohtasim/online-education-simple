import React from 'react';
import { Card } from 'react-bootstrap';
import './HomeCourse.css';

const HomeCourse = (props) => {
  const { picture, name } = props.course;
  return (
    <div>
      <Card className="home-course" style={{ width: '18rem', margin: '15px 10px' }}>
        <Card.Img style={{ height: '190px' }} variant="top" src={picture} />
        <Card.Body>
          <Card.Title className="text-white">{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeCourse;