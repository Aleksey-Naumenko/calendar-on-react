import React from 'react';
import './event.scss';

const CalendarHourBar = ({ event, onHourBarCreator }) => {
    if (!event) {
        return <div onClick={() => onHourBarCreator()}   // REPEATING
            className="calendar__hour-bar"></div>
    }


    const height = (new Date(event.dateTo) - new Date(event.dateFrom)) / 1000 / 60;
    const marginTop = new Date(event.dateFrom).getMinutes();
    const styles = {
        height: `${height}px`,
        marginTop: `${marginTop}px`
    };

    return (
        <div
            onClick={() => onHourBarCreator()}    // REPEATING
            className="calendar__hour-bar">
            {event ?
                <div style={styles}
                    className="day-event"></div> :
                null}
        </div>
    )
};

export default CalendarHourBar;