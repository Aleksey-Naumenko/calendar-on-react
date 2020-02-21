export const findEventsByDay = (events, day) => {
    return events.filter(event =>
         day.getDate() === event.dateFrom.getDate());  
};

export const findEventsByHour = (events, hour) => {
    const targetEvent = events.filter(event => {

      return  hour === event.dateFrom.getHours();
    })
    const [ event ] = targetEvent;

    return event; 
};