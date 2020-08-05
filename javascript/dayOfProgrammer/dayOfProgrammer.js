/*
    Author: Sumit Kumar Pandit
    Date: 5 Aug 2020
    Problem Title: Day of the Programmer | HackerRank
    Problem Link: https://bit.ly/3keCGNo
*/

function dayOfProgrammer(year) {
    const nonLeap = 243;
    const leap = 244;
    const eNonLeap = 230;
    let date = null;
    if(year < 1918) {
        if(year % 4 === 0) {
            date = `${256 - leap}.09.${year}`;
        } else {
            date = `${256 - nonLeap}.09.${year}`;
        }
    } else if(year === 1918) {
        date = `${256 - eNonLeap}.09.${year}`;
    } else {
        if((((year % 4) === 0) && ((year % 100) !== 0)) || ((year % 400) === 0)) {
            date = `${256 - leap}.09.${year}`;
        } else {
            date = `${256 - nonLeap}.09.${year}`;
        }
    }
    return date;
}

module.exports = dayOfProgrammer;