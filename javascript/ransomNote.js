/*
    Author: Sumit Kumar Pandit
    Date: 20 May 2020
    Problem Title: Hash Tables: Ransom Note | HackerRank
    Problem Link: https://rb.gy/w9ew2h
*/

function checkMagazine(magazine, note) {
    let magDict = {};
    let printed = false;
    for(let word of magazine) {
        if(magDict[word] === undefined) {
            magDict[word] = 1;
        } else {
            magDict[word]++;
        }
    }
    for(let word of note) {
        if(magDict[word] === undefined) {
            console.log("No");
            printed = true;
            break;
        } else if(magDict[word] === 0) {
            console.log("No");
            printed = true;
            break;
        } else {
            magDict[word]--;
        }
    }
    if(!printed) {
        console.log("Yes");
    }
}

const tests = [
    {
        id: 0,
        magazine: ["give", "me", "one", "grand", "today", "night"],
        note: ["give", "one", "grand", "today"]
    },
    {
        id: 1,
        magazine: ["two", "times", "three", "is", "not", "four"],
        note: ["two", "times", "two", "is", "four"]
    },
    {
        id: 2,
        magazine: ["ive", "got", 'a', "lovely", "bunch", "of", "coconuts"],
        note: ["ive", "got", "some", "coconuts"]
    }
];

for(let test of tests) {
    process.stdout.write(`Test ${test.id}: `);
    checkMagazine(test.magazine, test.note);
}