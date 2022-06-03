const getDays = (startDate, endDate) => {
    let diffInMseconds = new Date(endDate) - new Date(startDate);
    let diffInDays = diffInMseconds / (86400000); //There are 86,400,000 Milliseconds in 1 Day
    return `There are ${diffInDays} days between ${startDate} and ${endDate}.`;
}

console.log(getDays("2019-06-14", "2019-06-20"));

console.log(getDays("2018-12-29", "2019-01-01"));

console.log(getDays("2019-07-20", "2019-07-30"));