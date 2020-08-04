const migratoryBirds = require("./migratoryBirds");

const testCases = [
    {
        id: 0,
        arr: [1, 4, 4, 4, 5, 3],
        ans: 4
    },
    {
        id: 1,
        arr: [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4],
        ans: 3
    },
    {
        id: 2,
        arr: [1, 1, 2, 2, 3],
        ans: 1
    }
];

for(let elem of testCases) {
    test(`Test Case ${elem.id}`, () => {
        expect(migratoryBirds(elem.arr)).toBe(elem.ans);
    });
}