import React from 'react';
import './Home.css';
import Timer from './Timer';
import SpaceButton from './SpaceButton';

export const Home = () => {
  const targetDate = '2024-11-08T09:00:00';

  return (
    <div className="home-container">
      <section className="main">
       
        <div className="heading">
          <h1>Machine Learning</h1>
          <h1>WORKSHOP</h1>
          <p>
            Unleash the power of machine learning.
          </p>
        </div>
      </section>
      
      {/* SpaceButton */}

      <section className="button-section">
        <SpaceButton />
      </section>
      
      {/* Countdown Timer */}
      <section className='count'>
         <div>
          <h1>Gear Up for Learning! Workshop Starts In…</h1>
          <Timer date={targetDate} />
        </div>
      </section>
    </div>
  );
};
