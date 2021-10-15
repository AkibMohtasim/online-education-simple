import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';
import './Home.css'
const Home = () => {

  const [courseName, setCourseName] = useState([]);
  useEffect(() => {
    fetch('./courses.json')
      .then(res => res.json())
      .then(data => setCourseName(data))
  }, []);


  return (
    <div className="home">
      <div className="home-left">
        <p>Don't just work hard. Work smart.</p>
        <h1>Prepare for <span id="engg">Trending</span> Jobs Efficiently, Online.</h1>
      </div>

      <div className="home-right">
        <div className="d-flex flex-wrap my-4">
          {
            courseName.slice(0, 4).map(course =>
              <HomeCourse
                key={course.id}
                course={course}
              ></HomeCourse>
            )
          }
        </div>
        <h3 className="text-info w-75 mx-3">Around 10000 students are currently taking our courses right now.</h3>
        <Button variant="outline-light w-25 my-4 mx-3 p-3">Get Started</Button>
      </div>
    </div>
  );
};

export default Home;