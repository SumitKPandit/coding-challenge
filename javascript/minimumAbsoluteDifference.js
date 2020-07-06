/*
    Author: Sumit Kumar Pandit
    Date: 6 July 2020
    Problem Title: Minimum Absolute Difference in an Array | HackerRank
    Problem Link: https://bit.ly/2NXiAZ3
*/

function minimumAbsoluteDifference(arr) {
    let minAbs = Number.MAX_SAFE_INTEGER;
    const arrLen = arr.length;
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arrLen - 1; i++) {
        let currAbs = Math.abs(arr[i] - arr[i + 1]); 
        if(minAbs > currAbs) {
            minAbs = currAbs;
        }
    }
    return minAbs;
}

// Testing
const tests = [
    {
        case: 0,
        arr: [3, -7, 0],
        ans: 3
    },
    {
        case: 1,
        arr: [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75],
        ans: 1
    },
    {
        case: 2,
        arr: [1, -3, 71, 68, 17],
        ans: 3
    }
];

for(let test of tests) {
    let calculated = minimumAbsoluteDifference(test.arr);
    if(calculated === test.ans) {
        console.log(`Test Case ${test.case}: Expected- ${test.ans}, Output- ${calculated}, PASS`);
    } else {
        console.log(`Test Case ${test.case}: Expected- ${test.ans}, Output- ${calculated}, FAIL`);
    }
}