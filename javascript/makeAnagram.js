/*
    Author: Sumit Kumar Pandit
    Date: 04 July 2020
    Problem Title: Strings: Making Anagrams | HackerRank
    Problem Link: shorturl.at/tuS18
*/

function makeAnagram(a, b) {
    const charCount = {};
    let minCharCount = 0;
    for(let char of a) {
        if(charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }
    for(let char of b) {
        if(charCount[char] === undefined) {
            minCharCount++;
        } else if(charCount[char] > 1) {
            charCount[char]--;
        } else {
            delete charCount[char];
        }
    }
    for(let char in charCount) {
        minCharCount += charCount[char];
    }
    return minCharCount;
}

// Testing

const tests = [
    {
        case: 0,
        a: "cde",
        b: "abc",
        answer: 4
    },
    {
        case: 1,
        a: "fcrxzwscanmligyxyvym",
        b: "jxwtrhvujlmrpdoqbisbwhmgpmeoke",
        answer: 30
    },
    {
        case: 2,
        a: "showman",
        b: "woman",
        answer: 2
    }
];

for(let test of tests) {
    let calculatedAns = makeAnagram(test.a, test.b);
    if(calculatedAns === test.answer) {
        console.log(`Test Case ${test.case}: Answer - ${test.answer}, Calculated - ${calculatedAns}, PASS`);
    } else {
        console.log(`Test Case ${test.case}: Answer - ${test.answer}, Calculated - ${calculatedAns}, FAIL`);
    }
}