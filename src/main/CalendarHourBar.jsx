import React from 'react';
import Event from './event/Event';
import RedLine from '../redLine/RedLine';

const CalendarHourBar = ({ event, date, hour, onDeleteEvent }) => {
    return (
        <div
            className="calendar__hour-bar">

            {date.toDateString() === new Date().toDateString() &&
                hour === new Date().getHours() ?
                <RedLine key={date}/> : null }


            {event && <Event 
                event={event}
                onDeleteEvent={onDeleteEvent}
                id={event.id} />}
        </div>
    )
};

export default CalendarHourBar;