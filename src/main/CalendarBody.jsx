import React from 'react';
import './calendar-body.scss';

import CalendarDayBar from './CalendarDayBar';

const CalendarBody = ({ week }) => {
    return(
        <div className="calendar__week-bar">
            {week.map(() => <CalendarDayBar key={Math.random()} />)}
        </div>
    );
};

export default CalendarBody;