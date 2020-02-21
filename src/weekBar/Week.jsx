import React from 'react';
import './days.scss';

import Day from './Day';

const Week = ({ week }) => {
    return (
        <nav className="days-container">
            <div className="gmt">gmt+02</div>
            {week.map(day =>
                <Day key={Math.random()} day={day}/>
            )}
        </nav>
    );
};

export default Week;
