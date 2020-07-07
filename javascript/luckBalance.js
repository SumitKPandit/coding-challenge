/*
    Author: Sumit Kumar Pandit
    Date: 7 July 2020
    Problem Title: Luck Balance | HackerRank
    Problem Link: https://bit.ly/2C9ZV9J
*/

function luckBalance(k, contests) {
    contests.sort((a, b) => {
        if(a[1] > b[1]) {
            return 1;
        } else if (a[1] < b[1]) {
            return -1;
        } else {
            if(a[0] > b[0]) {
                return -1;
            } else {
                return 1;
            }
        }
    });
    let contestsLost = 0;
    let luckBalance = 0;
    for(let contest of contests) {
        if(contestsLost < k) {
            if(contest[1] === 1) {
                contestsLost++;
            }
            luckBalance += contest[0];
        } else {
            luckBalance -= contest[0];
        }
    }
    return luckBalance;
}

// Testing
const tests = [
    {
        case: 0,
        k: 3,
        contests: [
            [5, 1],
            [2, 1],
            [1, 1],
            [8, 1],
            [10, 0],
            [5, 0]
        ],
        ans: 29
    },
    {
        case: 1,
        k: 5,
        contests: [
            [13, 1],
            [10, 1],
            [9, 1],
            [8, 1],
            [13, 1],
            [12, 1],
            [18, 1],
            [13, 1]
        ],
        ans: 42
    },
    {
        case: 2,
        k: 2,
        contests: [
            [5, 1],
            [4, 0],
            [6, 1],
            [2, 1],
            [8, 0]
        ],
        ans: 21
    }
];

for(let test of tests) {
    let output = luckBalance(test.k, test.contests);
    if(output === test.ans) {
        console.log(`Test Case ${test.case}: Expected ${test.ans}, Output ${output}, PASS`);
    } else {
        console.log(`Test Case ${test.case}: Expected ${test.ans}, Output ${output}, FAIL`);
    }
}