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
      
      {/* Hamburger Menu Icon */}
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
              <button>Home</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" className="button" onClick={closeMenu}>
              <button>About</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName="active" className="button" onClick={closeMenu}>
              <button>Register</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
