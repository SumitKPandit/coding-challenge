/*
Author: Sumit Kumar Pandit
Date: 17 May 2020
Problem Statement: https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true
*/

function arrayManipulation(n, queries) {
    const initArr = [];
    for(let i = 0; i < n; i++) {
        initArr.push(0);
    }
    const len = queries.length;
    for(let i = 0; i < len; i++) {
        initArr[queries[i][0] - 1] += queries[i][2];
        if(queries[i][1] < n) {
            initArr[queries[i][1]] -= queries[i][2];
        }
    }
    let maxNum = 0;
    let sum = 0
    for(let i = 0; i < n; i++) {
        sum += initArr[i]
        if(sum > maxNum) {
            maxNum = sum;
        }
    }
    return maxNum;
}

const tests = [
    {
        id: 1,
        input: {
            n: 5,
            queries: [
                [1, 2, 100],
                [2, 5, 100],
                [3, 4, 100]
            ]
        },
        output: 200
    },
    {
        id: 2,
        input: {
            n: 10,
            queries: [
                [1, 5, 3],
                [4, 8, 7],
                [6, 9, 1]
            ]
        },
        output: 10
    },
    {
        id: 3,
        input: {
            n: 10,
            queries: [
                [2, 6, 8],
                [3, 5, 7],
                [1, 8, 1],
                [5, 9, 15]
            ]
        },
        output: 31
    }
];

for (let test of tests) {
    let answer = arrayManipulation(test.input.n, test.input.queries);
    if(test.output === answer) {
        console.log(`Test ${test.id} - ${answer}`, "\x1b[32m", "Pass", "\x1b[0m");
    } else {
        console.log(`Test ${test.id} - ${answer}`, "\x1b[31m", "Fail", "\x1b[0m")
    }
}