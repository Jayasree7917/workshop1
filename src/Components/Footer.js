import React from 'react';
import { LiaHomeSolid } from "react-icons/lia";
import { IoInformationCircleOutline } from "react-icons/io5";
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
    <div className="wrapper">
      <div className="main-content">
        {/* Your main content goes here */}
      </div>
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
              <FaFacebook className='icon-facebook'/>
              <GrLinkedin className='icon-linkedin'/>
              <IoLogoYoutube className='icon-youtube'/>
              <FiInstagram className='icon-instagram'/>
            </div>
          </div>
          
          <div className="footer-section-links">
            <h2>Useful Links</h2>
            <ul>
              <li>
                <LiaHomeSolid className="icon-home" />
                <a href="/">Home</a>
              </li>
              <li>
                <IoInformationCircleOutline className="icon-about"/>
                <a href="/about">About</a>
              </li>
              <li>
                <LuNewspaper className="icon-register"/><a href="">Register</a>
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
              <span>saeindia@nitdgp.ac.in </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};