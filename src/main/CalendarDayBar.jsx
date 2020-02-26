import React from 'react';

import CalendarHourBar from './CalendarHourBar';
import { findEventsByHour } from './findEvent';

const CalendarDayBar = ({ events, onShowPopup, date, onDeleteEvent }) => {
    
    const hourBars = Array(24).fill(null);

    return (
        <div className="calendar__day-bar">

            {hourBars.map((hour, index) => {
                const event = findEventsByHour(events, index);
                return <CalendarHourBar
                    onDeleteEvent={onDeleteEvent}
                    event={event}
                    hour={index}
                    date={date}
                    key={index}
                    onShowPopup={onShowPopup} />
            })}
        </div>)
};

export default CalendarDayBar;