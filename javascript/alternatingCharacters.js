/*
    Author: Sumit Kumar Pandit
    Date: 5 July 2020
    Problem Title: Alternating Characters | HackerRank
    Problem Link: https://bit.ly/2ZBuY6l
*/

function alternatingCharacters(s) {
    const desiredArr = [s[0]];
    for(let char of s) {
        if(char !== desiredArr[desiredArr.length - 1]) {
            desiredArr.push(char);
        }
    }
    return s.length - desiredArr.length;
}

// Testing
const tests = [
    {
        case: 0,
        s: "AAAA",
        expected: 3
    },
    {
        case: 1,
        s: "BBBBB",
        expected: 4
    },
    {
        case: 2,
        s: "ABABABAB",
        expected: 0
    },
    {
        case: 3,
        s: "BABABA",
        expected: 0
    },
    {
        case: 4,
        s: "AAABBB",
        expected: 4
    }
];

for(let test of tests) {
    const returned = alternatingCharacters(test.s);
    if(test.expected === returned) {
        console.log(`Test Case ${test.case}: Expected: ${test.expected}, Returned: ${returned}, PASS`);
    } else {
        console.log(`Test Case ${test.case}: Expected: ${test.expected}, Returned: ${returned}, FAIL`);
    }
}