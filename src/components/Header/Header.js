import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../logo.png';

const Header = () => {
  return (
    <div>
      <div className="logo-section">
        <h3>Jobs Preparation Online</h3>
        <img src={logo} alt="logo" />
      </div>
      <div className="header-section">
        <Link className="link" to="/home">Home</Link>
        <Link className="link" to="/services">Services</Link>
        <Link className="link" to="/teaching_body">Teaching Body</Link>
        <Link className="link" to="/about">About Us</Link>
        <Link className="link" to="/contact">Contact</Link>
      </div>

    </div>
  );
};

export default Header;