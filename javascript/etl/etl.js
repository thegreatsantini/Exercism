const etl = (oldData) => {
    let newData = {};

    for ( let key in oldData ) {
        oldData[key].forEach(val => {
            newData[val] = key
        })
    }
    return newData
};

const old = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
}

console.log(etl(old))