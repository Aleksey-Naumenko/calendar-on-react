export const getMonday = () => {
    const week = Array(7).fill(new Date());

    const currDay = new Date().getDay(); 
    let counter = currDay;

    const currentWeek = week.map((day, index) => {

        if (index < currDay) {
            --counter;
            return new Date(day.setDate(new Date().getDate() - counter));
        } else {
            ++counter;
            return new Date(day.setDate(new Date().getDate() + counter))
        }
    });
    return currentWeek[0];
}

export const createDisplayedWeek = firstDay => {
    const week = Array(7).fill(new Date());
    let firstDayOfWeek = firstDay;

    return week.map(day => {
        day = new Date(firstDayOfWeek);
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
        return day;
    });
}

// export const switchWeekForward = week => {
//     return week.map(day => 
//             new Date(day.setDate(day.getDate() + 7)));
// }

// export const switchWeekBackward = week => {
//     return week.map(day => 
//             new Date(day.setDate(day.getDate() - 7)));
// }