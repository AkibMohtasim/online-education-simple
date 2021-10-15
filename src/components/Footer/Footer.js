import React from 'react';
import './Footer.css';
import logo from '../../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer">
      <div className="w-25 d-flex flex-column align-items-center">
        <img src={logo} alt="logo" className="w-25" /> <br />
        <p>Great lesson plans for All kinds of students! Students can customize lesson plans to best.</p>
        <p><small>All rights reserved &copy; JPO 2021</small></p>
      </div>

      <div className="w-25 d-flex flex-row align-items-center">
        <h5 className="text-white">Connect with us on Social Media</h5>
        <FontAwesomeIcon className="icon" icon={faFacebook}></FontAwesomeIcon>
        <FontAwesomeIcon className="icon" icon={faYoutube}></FontAwesomeIcon>
        <FontAwesomeIcon className="icon" icon={faEnvelopeSquare}></FontAwesomeIcon>
      </div>

      <div className="w-25 flex-column align-items-center">
        <h4 className="text-white">Subscribe</h4>
        <div className="d-flex flex-row align-items-center justify-content-center m-3">
          <input type="email" placeholder="Your email address" id="input" />
          <Button variant="outline-light"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
        </div>
        <p>Get the latest news and updates right at your inbox.</p>
      </div>
      <br />
    </div>
  );
};

export default Footer;