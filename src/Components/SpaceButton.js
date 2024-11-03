import React from 'react';
import './SpaceButton.css';

const SpaceButton = () => {
  const handleClick = () => {
    window.location.href = 'https://www.google.com'; // Change to your desired URL
  };
  return (
    <button type="button" className="btn" onClick={handleClick}>
      <strong>REGISTER</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>

  );
};

export default SpaceButton;
