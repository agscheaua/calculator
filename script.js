
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

function operate (operator, firstOperand, secondOperand) {
    if (operator === '+') {
        return addNum(firstOperand, secondOperand);
    }
    else if (operator === '-') {
        return substractNum(firstOperand, secondOperand);
    }
    else if (operator === '*') {
        return multiplyNum(firstOperand, secondOperand);
    }
    else if (operator === '/') {
      return divideNum(firstOperand, secondOperand);
    }
    else {
        return invalidInput;
    };
};

function inputCalculation () {
    let firstNumber;
    let operatorSign;
    let secondNumber;

    const containerCalculator = document.querySelector('.containerCalculator');
    containerCalculator.addEventListener('click', (item) => {
        firstNumber = item.target.textContent;
        containerScreen.textContent = firstNumber; 
        console.log(firstNumber);
    } ); 
    
    const containerScreen = document.querySelector('.containerScreen');


};
console.log( inputCalculation() ); 
