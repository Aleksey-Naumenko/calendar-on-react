import React from 'react';

import moment from 'moment';

const Day = ({ day }) => {
    const dayDate = new Date(day).getDate();
    const dayName = moment(new Date(day)).format('ddd');

    return (
        <div className="day">
            <span className="day-name">{dayName}</span>
            <div className="day-date">{dayDate}</div>
        </div>
    );
};

export default Day;