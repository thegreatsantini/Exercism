const rainDrops = (num) => {
    let answer = '';

    if ( num % 3 === 0 ) {
        answer += 'Pling';
    }  
    if ( num % 5 === 0 ) {
        answer += 'Plang';
    } 
    if ( num % 7 === 0 ) {
        answer += 'Plong';
    }

    return answer.length > 1 ?  answer : num 
};

const number = 105; // PlingPlangPlong
const otherNumber = 35 //PlangPlong

console.log(rainDrops(number));
console.log(rainDrops(otherNumber));
console.log(rainDrops(1))