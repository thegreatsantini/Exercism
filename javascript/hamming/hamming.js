const hamming = (strand1, strand2) => {
    if (strand1.length != strand2.length) return 'DNA strands must be of equal length';

    let differnceCount = 0;

    for (let char = 0; char < strand1.length; char++) {
        if (strand1[char] !== strand2[char]) {
            differnceCount++;
        }
    };
    return differnceCount;
};

console.log(hamming('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'))
