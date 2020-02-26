import React from 'react';
import '../main/event/event.scss';

const PopupToDelete = ({ eventId, onDeleteEvent }) => {

    return (
        <div 
            onClick={() => onDeleteEvent(eventId)}
            className="day-event_delete">
            Delete
        </div>
    );
};

export default PopupToDelete;