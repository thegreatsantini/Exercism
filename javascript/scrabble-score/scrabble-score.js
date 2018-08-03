const scoreTable = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    g: 2,
    d: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    x: 8,
    j: 8,
    q: 10,
    z: 10
}

const scrabbleScore = (str) => {
    let score = 0;
    const allLowerCase = str.toLowerCase();
    
    for ( let char = 0; char < allLowerCase.length; char ++ ) {
        score += scoreTable[allLowerCase[char]]
    }
    return score
};

const word = 'OXYPHENBUTAZONE';

console.log(scrabbleScore(word));