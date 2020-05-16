/* 
https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
*/

function minimumBribes(q) {

    const countDict = {};
    let lastSwap = 0;

    for(let [i, v] of q) {

        if(v > q[i + 1]) {

            let tmp = v;
            v = q[i + 1];
            q[i + 1] = tmp;

            if(countDict[q[i + 1]] !== undefined) {

                if(countDict[q[i + 1]] < 2) {

                    countDict[q[i + 1]]++;

                } else {

                    console.log("Too chaotic");

                }

            } else {

                countDict[q[i + 1]] = 1;

            }

            lastSwap = (i - 1) < 0 ? 0 : (i - 1);
            break;

        }

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