import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css'
const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <p>Don't just work hard. Work smart.</p>
        <h1>Prepare for <span id="engg">Trending</span> Jobs Efficiently, Online.</h1>
      </div>

      <div className="home-right">
        <h3 className="text-info w-75">Around 10000 students are currently taking our courses right now.</h3>
        <Button variant="outline-light w-25 my-4 p-3">Get Started</Button>
      </div>
    </div>
  );
};

export default Home;