const divisibleSumPairs = require("./divisibleSumPairs");

const testCases = [
    {
        case: 1,
        n: 6,
        ar: [1, 2, 3, 4, 5, 6],
        k: 5,
        ans: 3
    },
    {
        case: 2,
        n: 6,
        k: 3,
        ar: [1, 3, 2, 6, 1, 2],
        ans: 5
    }
];

for(let testCase of testCases) {
    test(`Test Case ${testCase.case}`, () => {
        expect(divisibleSumPairs(testCase.n, testCase.k, testCase.ar)).toBe(testCase.ans);
    });
}