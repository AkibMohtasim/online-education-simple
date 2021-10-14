import { faAmazon, faAndroid, faApper, faApple, faBlackberry, faCcPaypal, faFedex, faHooli, faHotjar, faLinux, faRaspberryPi, faSearchengin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2 className="my-4">About Us</h2>
      <p>JPO is an online learning platform - which has the sole purpose of upgrading any particular skill for the students. Upon completing a course and getting the certificate, a student can directly apply for suitable jobs or apply for higher education in various companys and universities.</p>
      <div className="trusted-companys">
        <h2>Trusted by 100 world's best companies</h2>
        <div className="icons">
          <FontAwesomeIcon className="icon" icon={faApple}></FontAwesomeIcon>
          <FontAwesomeIcon className="icon" icon={faApper}></FontAwesomeIcon>
          <FontAwesomeIcon className="icon" icon={faAmazon}></FontAwesomeIcon>
          <FontAwesomeIcon className="icon" icon={faAndroid}></FontAwesomeIcon>
          <FontAwesomeIcon className="icon" icon={faBlackberry}></FontAwesomeIcon>
          <FontAwesomeIcon className="icon" icon={faCcPaypal}></FontAwesomeIcon>
          <FontAwesomeIcon className="icon" icon={faFedex}></FontAwesomeIcon>
          <FontAwesomeIcon className="icon" icon={faHotjar}></FontAwesomeIcon>
          <FontAwesomeIcon className="icon" icon={faHooli}></FontAwesomeIcon>
          <FontAwesomeIcon className="icon" icon={faLinux}></FontAwesomeIcon>
          <FontAwesomeIcon className="icon" icon={faRaspberryPi}></FontAwesomeIcon>
          <FontAwesomeIcon className="icon" icon={faSpotify}></FontAwesomeIcon>
          <FontAwesomeIcon className="icon" icon={faSearchengin}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default About;