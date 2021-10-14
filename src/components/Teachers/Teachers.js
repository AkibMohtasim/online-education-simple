import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = () => {

  const [teachersName, setTeachersName] = useState([]);
  useEffect(() => {
    fetch('./professors.json')
      .then(res => res.json())
      .then(data => setTeachersName(data))
  }, []);

  return (
    <div className="teachers">
      <h2>Meet our Most Popular Teachers <FontAwesomeIcon className="" icon={faAngleDoubleRight} /></h2>
      <br /><br />
      <br /><br />
      <div className="d-flex flex-wrap justify-content-center">
        {
          teachersName.map(teacher => <Teacher
          key={teacher.id}
          teacher={teacher}
          >
          </Teacher>)
        }
      </div>
    </div>
  );
};

export default Teachers;