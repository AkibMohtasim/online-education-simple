import {  faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Services.css';


const Services = () => {
  const [courseName, setCourseName] = useState([]);
  useEffect( () => {
    fetch('./courses.json')
    .then(res => res.json())
    .then(data => setCourseName(data))
  }, []);




  return (
    <div className="courses">
      <h2>The courses we offer <FontAwesomeIcon className="" icon={faArrowAltCircleRight}/></h2>
      <br /><br />
      <br /><br />
      <div className="d-flex flex-wrap justify-content-center">
      {
        courseName.map(course => <Course
          key = {course.id} 
          course={course}
          ></Course>)
      }
      </div>
      
    </div>
  );
};

export default Services;