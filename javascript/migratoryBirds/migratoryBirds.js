/*
    Author: Sumit Kumar Pandit
    Date: 4 Aug 2020
    Problem Title: Migratory Birds | HackerRank
    Problem Link: https://bit.ly/2PqjuOl
*/

function migratoryBirds(arr) {
    arr.sort((a, b) => a - b);
    let currNum = arr[0];
    let currCount = 0;
    let maxCount = 0;
    let finalId = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(currNum === arr[i]) {
            currCount++;
            if(i === (arr.length - 1)) {
                if(currCount > maxCount) {
                    finalId = currNum;
                }
            }
        } else {
            if(currCount > maxCount) {
                maxCount = currCount;
                finalId = currNum;
            }
            currNum = arr[i];
            currCount = 1;
        }
    }
    return finalId;
}

module.exports = migratoryBirds;