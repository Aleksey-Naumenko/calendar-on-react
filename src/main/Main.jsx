import React from 'react';

import CalendarBody from './CalendarBody';
import Sidebar from './Sidebar';


const Main = ({ week }) => {
    return (
        <div className="main-part">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="calendar">
                <CalendarBody week={week} />
            </div>
        </div>
    );
};

export default Main;