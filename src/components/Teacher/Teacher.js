import React from 'react';
import { Figure } from 'react-bootstrap';

const Teacher = (props) => {
  const {name, img, subject} = props.teacher;

  return (
    <div>
      <Figure className="m-5">
        <Figure.Image
          style={{height: '171px', width: '180px'}}
          alt="teacher-image"
          src={img}
          roundedCircle
        />

        <Figure.Caption className="text-white">
          {name}
          <br />
          {subject}
        </Figure.Caption>
      </Figure>
    </div>
  );
};

export default Teacher;