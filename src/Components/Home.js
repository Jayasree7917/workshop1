import React from 'react';
import './Home.css';
import Timer from './Timer';
import SpaceButton from './SpaceButton';

export const Home = () => {
  const targetDate = '2024-11-09T10:00:00';

  return (
    <div className="home-container">
      <section className="main">
       
        <div className="heading">
          <h1>MACHINE LEARNING</h1>
          <h1>WORKSHOP</h1>
          <p>
            AI/ML enables the creation of intelligent chatbots that 
            facilitate natural conversations and structured responses.
          </p>
        </div>
      </section>
      
      {/* SpaceButton */}

      <section className="button-section">
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdi0pQU4D_4i2UBk1brPG9NL-K5TmA3I276aq8Q5NQUlnm9fw/viewform?usp=sf_link' target="_blank" without rel="noreferrer">
        <SpaceButton />
        </a>
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
