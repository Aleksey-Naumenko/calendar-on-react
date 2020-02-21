export const getMonday = () => {

    const currDate = new Date();  // 4
    let firstDay = null;

    for (let i = 0; i <= 7; i++) {
        if (currDate.getDay() !== 1) {
            currDate.setDate(currDate.getDate() - 1);

        } else {
            firstDay = currDate;
        }
    }
    return firstDay;
}

export const createDisplayedWeek = firstDay => {
    const week = Array(7).fill(null);
    let firstDayOfWeek = new Date(firstDay);

    const newWeek = week.map(day => {
        day = new Date(firstDayOfWeek);
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
        return day;
    });
    return newWeek;
}

// export const getMonday = () => {
//     const week = Array(7).fill(new Date());

//     const currDay = new Date().getDay(); 
//     let counter = currDay;

//     const currentWeek = week.map((day, index) => {

//         if (index < currDay) {
//             --counter;
//             return new Date(day.setDate(new Date().getDate() - counter));
//         } else {
//             ++counter;
//             return new Date(day.setDate(new Date().getDate() + counter))
//         }
//     });
//     console.log(new Date(currentWeek[0]));
//     console.log(currentWeek);
//     return new Date(currentWeek[0]);
// }