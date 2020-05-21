function twoStrings(s1, s2) {
    const s1Dict = {};
    for(let char of s1) {
        if(s1Dict[char] === undefined) {
            s1Dict[char] = 1;
        } else {
            s1Dict[char]++;
        }
    }
    for(let char of s2) {
        if(s1Dict[char] !== undefined) {
            return "YES";
        }
    }
    return "NO";
}

const tests = [
    {
        id: 0,
        s1: "hello",
        s2: "world",
        output: "YES"
    },
    {
        id: 1,
        s1: "hi",
        s2: "world",
        output: "NO"
    },
    {
        id: 2,
        s1: "wouldyoulikefries",
        s2: "abcabcabcabcabcabc",
        output: "NO"
    },
    {
        id: 3,
        s1: "hackerrankcommunity",
        s2: "cdecdecdecde",
        output: "YES"
    },
    {
        id: 4,
        s1: "jackandjill",
        s2: "wentupthehill",
        output: "YES"
    },
    {
        id: 5,
        s1: "writetoyourparents",
        s2: "fghmqzldbc",
        output: "NO"
    },
    {
        id: 6,
        s1: "aardvark",
        s2: "apple",
        output: "YES"
    },
    {
        id: 7,
        s1: "beetroot",
        s2: "sandals",
        output: "NO"
    }
];

for(let test of tests) {
    let result = twoStrings(test.s1, test.s2);
    console.log(`Test ${test.id}: ${result} ${result === test.output ? "PASS" : "FAIL"}`);
}