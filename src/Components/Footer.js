import React from 'react';
import { LiaHomeSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";
import { TbMailFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

      <div className="footer-section-social">
          <div className="footer-brand">
            <a href="/" className="flex items-center">
              <img src="https://swarajjaiswal.github.io/saeevents/logo.png" alt="Logo" className="h-12" />
            </a>
          </div>
          <h2>Follow Us</h2>
          <div className='social-icon'>
            <a href="https://www.facebook.com/SAENITD/"><FaFacebook className='icon-facebook'/></a>
            <a href="https://www.linkedin.com/company/sae-nitdgp/posts/?feedView=all"><GrLinkedin className='icon-linkedin'/></a>
            <a href="https://www.youtube.com/@saenitdgp"><IoLogoYoutube className='icon-youtube'/></a>
            <a href="https://www.instagram.com/sae.nitd/"><FiInstagram className='icon-instagram'/></a>
          </div>
        </div>  
      
        <div className="footer-section-links">
          <h2>Useful Links</h2>
          <ul>
            <li>
            <LiaHomeSolid className="icon-home" />
            <Link to="/">Home</Link>
            </li>
            <li>
            <LiaHomeSolid className="icon-home" />
            <Link to="/about">About</Link>
            </li>
            <li>
              <LuNewspaper className="icon-register"/><a href="https://docs.google.com/forms/d/e/1FAIpQLSdi0pQU4D_4i2UBk1brPG9NL-K5TmA3I276aq8Q5NQUlnm9fw/viewform?usp=sf_link" target='_blank' without rel="noreferrer">Register</a>
            </li>
          </ul>
        </div>

        <div className="footer-section-contact">
          <h2>Contact Us</h2>
          <div className="location-container">
            <FaLocationDot className="icon-location" />
            <div className="address-content">
              <p>Mahatma Gandhi Avenue A-zone</p>
              <p>Durgapur, West Bengal, 713209</p>
            </div>
          </div>
          <div className="email-container">
            <TbMailFilled className="icon-message" />
            <a href="https://saenitd.in/"><span>saeindia@nitdgp.ac.in</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};