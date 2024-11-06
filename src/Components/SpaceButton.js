import React from 'react';
import './SpaceButton.css'; 

const SpaceButton = () => {
  return (
    <button class="regbutton">
      <span class="regbutton_lg">
          <span class="regbutton_sl"></span>
          <span class="regbutton_text"><a href="/register">Register_NOW</a></span>
      </span>
    </button>
  );
};

export default SpaceButton;