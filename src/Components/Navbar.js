import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="flex items-center">
          <img src="https://swarajjaiswal.github.io/saeevents/logo.png" alt="Logo" className="h-12" />
        </a>
      </div>
      
      
      <div className="ham" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      </div>

      {/* Menu Links */}
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" className="button" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" className="button" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
          <NavLink
            to="#"
            activeClassName="active"
            className="button"
            onClick={(e) => {
              e.preventDefault(); // Prevents the default behavior of NavLink
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdi0pQU4D_4i2UBk1brPG9NL-K5TmA3I276aq8Q5NQUlnm9fw/viewform?usp=sf_link",
                "_blank",
                "noopener,noreferrer"
              );
              closeMenu();
            }}
          >
            Register
          </NavLink>

          </li>
        </ul>
      </div>
    </nav>
  );
};
