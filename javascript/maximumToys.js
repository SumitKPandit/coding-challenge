/*
    Author: Sumit Kumar Pandit
    Date: 3 July 2020
    Problem Title: Mark and Toys | HackerRank
    Problem Link: https://rb.gy/kqw8ma
*/

function maximumToys(prices, k) {
    let sortedPrices = [...prices].sort((a, b) => a - b);
    let numberOfToys = 0;
    let totalPrice = 0;
    for(let price of sortedPrices) {
        totalPrice += price;
        if(totalPrice <= k) {
            numberOfToys++;
        } else {
            break;
        }
    }
    return numberOfToys;
}

// Testing
const tests = [
    {
        case: 0,
        prices: [1, 12, 5, 111, 200, 1000, 10],
        k: 50,
        answer: 4
    },
    {
        case: 1,
        prices: [1, 2, 3, 4],
        k: 7,
        answer: 3
    },
    {
        case: 2,
        prices: [3, 7, 2, 9, 4],
        k: 15,
        answer: 3
    }
];

for(let test of tests) {
    let calculatedAnswer = maximumToys(test.prices, test.k);
    if(calculatedAnswer === test.answer) {
        console.log(`Test Case ${test.case}: Calculated - ${calculatedAnswer}, Answer - ${test.answer}, PASS`);
    } else {
        console.log(`Test Case ${test.case}: Calculated - ${calculatedAnswer}, Answer - ${test.answer}, FAIL`);
    }
}