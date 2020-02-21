import React from 'react';

import CalendarHourBar from './CalendarHourBar';
import { findEventsByHour } from '../commonFuncs/createEditEvents';

const CalendarDayBar = ({ events, onHourBarCreator }) => {
    const hourBars = Array(24).fill(null);

    return (
        <div className="calendar__day-bar">
            { hourBars.map((hour, index) => {
                const event = findEventsByHour(events, index);
                return <CalendarHourBar
                    event={event}
                    hour={index}
                    key={Math.random()}
                    onHourBarCreator={onHourBarCreator} />
            })}
        </div>)
};

export default CalendarDayBar;