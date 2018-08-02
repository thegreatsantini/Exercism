// I dont know how to set the prototypes

const checkIfTriangle = (...sides) => {
    let allTrue = false;

    const allPosatives = sides.every(val => {
        return val > 0;
    });
    if (sides[0] + sides[1] >= sides[2] && sides[0] + sides[2] >= sides[1] && sides[1] + sides[2] >= sides[0]) {
        allTrue = true;
    }

    if (allTrue && allPosatives) {
        return true;
    }
    return false;
};

const checkEquilateral = (sides) => {
    const oneSide = sides[0]
    let index = 0

    while (index < sides.length) {
        if (oneSide !== sides[index]) {
            return false;
        }
        index++
    };
    return true;
};

const checkIsosceles = (sides) => {
    if (new Set(sides).size === 1) {
        return false;
    }
    return sides.length !== (new Set(sides)).size;
};

const checkTriangleType = (...sides) => {
    const isEquilateral = checkEquilateral(sides);
    const isIsosceles = checkIsosceles(sides);

    if (checkIfTriangle(sides)) {
        return 'Not Triangle'
    }
    else if (checkEquilateral(sides)) {
        return 'equilateral';
    }
    else if (checkIsosceles(sides)) {
        return 'isosceles'
    }

    return 'scalene'
};