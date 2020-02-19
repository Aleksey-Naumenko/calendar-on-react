import React from 'react';
import './calendar-body.scss';

import CalendarDayBar from './CalendarDayBar';

const CalendarBody = ({ week }) => {
    return(
        <div className="calendar__week-bar">
            {week.map(day => <CalendarDayBar key={day.id} />)}  
        </div>
    );
};

export default CalendarBody;