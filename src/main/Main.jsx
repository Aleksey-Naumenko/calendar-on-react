import React from 'react';

import CalendarBody from './CalendarBody';
import Sidebar from './Sidebar';


const Main = ({ week, events, onHourBarCreator }) => {
    return (
        <div className="main-part">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="calendar">
                <CalendarBody 
                    week={week}
                    events={events}
                    onHourBarCreator={onHourBarCreator} />
            </div>
        </div>
    );
};

export default Main;