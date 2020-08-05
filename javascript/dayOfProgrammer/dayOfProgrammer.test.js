const dayOfProgrammer = require("./dayOfProgrammer");

const testCases = [
    {
        id: 0,
        year: 1984,
        ans: "12.09.1984"
    },
    {
        id: 1,
        year: 2017,
        ans: "13.09.2017"
    },
    {
        id: 2,
        year: 2016,
        ans: "12.09.2016"
    },
    {
        id: 3,
        year: 1800,
        ans: "12.09.1800"
    }
];

for(let elem of testCases) {
    test(`Test Case ${elem.id}`, () => {
        expect(dayOfProgrammer(elem.year)).toBe(elem.ans);
    });
}