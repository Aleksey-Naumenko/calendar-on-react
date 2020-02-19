import React from 'react';


const Day = ({ day, date }) => {
    return (
        <div className="day">
            <span className="day-name">{day}</span>
            <div className="day-date">{date}</div>
        </div>
    );
};

export default Day;