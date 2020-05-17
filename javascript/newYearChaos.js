/* 
https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
*/

function minimumBribes(q) {
    const countDict = {};
    let printed = false;
    for(let i = 0; i < q.length; i++) {
        if(q[i] > q[i + 1]) {
            let tmp = q[i];
            q[i] = q[i + 1];
            q[i + 1] = tmp;
            if(countDict[q[i + 1]] !== undefined) {
                if(countDict[q[i + 1]] < 2) {
                    countDict[q[i + 1]]++;
                } else {
                    console.log("Too chaotic");
                    printed = true;
                    break;
                }
            } else {
                countDict[q[i + 1]] = 1;
            }
            i = (i - 2) < -1 ? 0 : (i - 2);
        }
    }
    if(!printed) {
        let swaps = 0;
        for(let elem in countDict) {
            swaps += countDict[elem];
        }
        console.log(swaps);
    }
}

const tests = [
    {
        input: [5,1,2,3,7,8,6,4],
        output: "Too chaotic"
    },
    {
        input: [1,2,5,3,7,8,6,4],
        output: 7
    },
    {
        input: [2,1,5,3,4],
        output: 3
    },
    {
        input: [2,5,1,3,4],
        output: "Too chaotic"
    },
    {
        input: [1,2,5,3,4,7,8,6],
        output: 4
    }
];

for(let test of tests) {
    minimumBribes(test.input);
}