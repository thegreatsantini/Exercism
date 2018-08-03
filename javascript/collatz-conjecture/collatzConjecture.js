const collatzConjecture = (num) => {
    let steps = 0;

    while (num !== 1) {
        if (num % 2 === 0) {
            num /= 2;
            steps++
        }
        else if (num % 2 !== 0) {
            num = num * 3 + 1;
            steps++
        }
    };
    return steps;
};

console.log(collatzConjecture(12))