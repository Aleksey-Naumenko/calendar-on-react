import React from 'react';


const CalendarDayBar = () => {
    const hourBars = Array(24).fill(null);

    return (
        <div className="calendar__day-bar">
            {hourBars.map((hourBar) => {
                return <div 
                            className="calendar__hour-bar"
                            key={Math.random()}
                        ></div>
            })}
        </div>)
};

export default CalendarDayBar;