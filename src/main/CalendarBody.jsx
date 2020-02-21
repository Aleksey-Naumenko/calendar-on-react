import React from 'react';
import './calendar-body.scss';

import CalendarDayBar from './CalendarDayBar';
import { findEventsByDay } from '../commonFuncs/createEditEvents';

const CalendarBody = ({ week, events, onHourBarCreator }) => {

    return (
        <div className="calendar__week-bar">
            { week.map((day) => {
                const eventsOnDay = findEventsByDay(events, day);
                return <CalendarDayBar
                    key={Math.random()}
                    events={eventsOnDay}
                    onHourBarCreator={onHourBarCreator}
                    />})
            }
        </div>
    );
};

export default CalendarBody;