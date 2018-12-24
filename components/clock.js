import React, { useState, useEffect } from 'react';
import { getTime } from './utils';
import Share from './share';

export default () => {
  const [time, setTime] = useState(getTime());

  setTimeout(() => {
    setTime(getTime());
  }, 500);

  return (
    <section className="hero is-light is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="subtitle">
            The Time on Mars is:
          </h2>

          <h1 className="title" id="clocksz">
            { time.mars }
          </h1>
          <h2 className="subtitle" style={{ fontSize: 30 }}>
            Earth: { time.earth }
          </h2>
          <Share />
        </div>
      </div>
    </section>
  );
};
