const encode = (str) => {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++
        } else if (str[i] != str[i + 1] && count === 0) {
            compressed += str[i];
            count = 1;
        } else if (str[i] != str[i + 1] && count != 0) {
            compressed += count + str[i];
            count = 1;
        }
    }
    return compressed;
};

encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB');

const decode = (str) => {
    let decodedStr = '';
    let char = '';
    let count = '';

    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i])) {
            count += str[i]
        } else if (str[i].match(/[a-zA-Z]+/)) {
            decodedStr += str[i] +str[i].repeat(parseInt(count));
            count = ''
        }
    }
    return decodedStr;
};

console.log(decode('2ab2c'))