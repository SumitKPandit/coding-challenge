/*
    Author: Sumit Kumar Pandit
    Date: 3 Aug 2020
    Problem Title: Divisible Sum Pairs | HackerRank
    Problem Link: https://bit.ly/33i6XF3
*/

function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for(let i = 0; i < (n - 1); i++) {
        for(let j = (i + 1); j < n; j++) {
            if((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}

module.exports = divisibleSumPairs;