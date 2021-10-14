import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className="header-section">
      <Link className="link" to="/home">Home</Link>
      <Link className="link" to="/services">Services</Link>
      <Link className="link" to="/teaching_body">Teaching Body</Link>
      <Link className="link" to="/about">About Us</Link>
      <Link className="link" to="/contact">Contact</Link>
    </div>
  );
};

export default Header;