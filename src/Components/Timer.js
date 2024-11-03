import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './Timer.css'; // Import the CSS file
import Tracker from './Tracker';

const Timer = ({ date }) => {
  const [time, setTime] = useState({});
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    setCountdown(moment(date, 'YYYY-MM-DDTHH:mm:ss'));
  }, [date]);

  useEffect(() => {
    const update = () => {
      if (countdown) {
        const now = moment();
        const t = countdown.diff(now);
        setTime({
          Days: Math.floor(t / (1000 * 60 * 60 * 24)),
          Hours: Math.floor((t / (1000 * 60 * 60)) % 24),
          Minutes: Math.floor((t / 1000 / 60) % 60),
          Seconds: Math.floor((t / 1000) % 60),
        });
      }
    };

    const interval = setInterval(() => {
      update();
    }, 1000);

    update(); // Initial call to avoid delay

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className="flip-clock" onClick={() => setCountdown(moment(date))}>
      {['Days', 'Hours', 'Minutes', 'Seconds'].map((tracker) => (
        <Tracker key={tracker} property={tracker} time={time} />
      ))}
    </div>
  );
};

export default Timer;