
const invalidInput = "Invalid input, try again!";

function addNum (para1, para2) {
    if ( typeof para1 !== 'number' || typeof para2 !== 'number' ) {
        return invalidInput;
    }
    else {
        return para1 + para2;
    };
};

function substractNum (para1, para2) {
    if ( typeof para1 !== 'number' || typeof para2 !== 'number' ) {
        return invalidInput;
    }
    else {
        return para1 - para2;
    };
}

function multiplyNum (para1, para2) {
    if ( typeof para1 !== 'number' || typeof para2 !== 'number' ) {
        return invalidInput;
    }
    else {
        return para1 * para2;
    };
}

function divideNum (para1, para2) {
    if ( typeof para1 !== 'number' || typeof para2 !== 'number' ) {
        return invalidInput;
    }
    else {
        return para1 / para2;
    }
}