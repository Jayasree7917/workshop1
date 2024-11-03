import React, { useEffect, useState } from 'react';

const Tracker = ({ property, time }) => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [show, setShow] = useState(false);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (time[property] !== undefined) {
      setShow(true);
      const val = Math.max(0, time[property]);
      if (val !== current) {
        setPrevious(current);
        setCurrent(val);
        setFlipping(true);
        setTimeout(() => setFlipping(false), 600); 
      }
    } else {
      setShow(false);
    }
  }, [time, property, current]);

  const zeroFill = (value) => (value < 10 ? '0' : '') + value;

  return (
    <span className={`flip-clock__piece ${show ? '' : 'hidden'}`}>
      <span className={`flip-clock__card flip-card ${flipping ? 'flip' : ''}`}>
        <b className="flip-card__top">{zeroFill(current)}</b>
        <b className="flip-card__bottom" data-value={zeroFill(current)}></b>
        <b className="flip-card__back" data-value={zeroFill(previous)}></b>
        <b className="flip-card__back-bottom" data-value={zeroFill(previous)}></b>
      </span>
      <span className="flip-clock__slot">{property}</span>
    </span>
  );
};

export default Tracker;