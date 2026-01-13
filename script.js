
const invalidInput = "Invalid input, try again!";

function addNum (para1, para2) {
    return Number(para1) + Number(para2); 
};
function substractNum (para1, para2) {
    return Number(para1) - Number(para2);
};
function multiplyNum (para1, para2) {
    return Number(para1) * Number(para2);
};
function divideNum (para1, para2) {
    return Number(para1) / Number(para2);
};

function operate (firstOperand, operator, secondOperand) {
    if (operator === '/' && secondOperand === '0') {
        return 'ERROR';
    }
    else if (operator === '+') {
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
    };
};

let firstNumber = '';
let operatorSign = '';
let secondNumber = '';
let choiceOperator = ['+', '-', '*', '/'];

const containerCalculator = document.querySelector('.containerCalculator');
const containerScreen = document.querySelector('.screen');
const containerNumbers = document.querySelectorAll('.containerNumbers');
const clearAll = document.querySelector('.clearAll');
const equal = document.querySelector('.equal');
const clearOne = document.querySelector('.clearOne');

function inputCalculation () {
    containerNumbers.forEach( (item) => { 
        item.addEventListener('click', (elem) => {
            elem.stopPropagation();
            if ( !choiceOperator.includes(elem.target.textContent) ) {
                if (!operatorSign) {
                    if (containerScreen.textContent === 'ERROR' && elem.target.textContent !== '.') {   
                        containerScreen.textContent = '';
                        firstNumber += elem.target.textContent.trim();
                        containerScreen.textContent += elem.target.textContent.trim(); 
                    }
                    else if (containerScreen.textContent === 'ERROR' && elem.target.textContent === '.') {
                        containerScreen.textContent = 'ERROR'; 
                    }
                    else if (containerScreen.textContent && firstNumber === '') {
                        containerScreen.textContent = '';
                        firstNumber += elem.target.textContent.trim();
                        containerScreen.textContent += elem.target.textContent.trim(); 
                    }
                    else if ( firstNumber === '' && elem.target.textContent === '.') {
                        containerScreen.textContent = 'ERROR'; 
                    }
                    else if (firstNumber.indexOf('.') > -1 && elem.target.textContent === '.') {
                        console.log('only 1 "." in firstNumber :D');
                    }
                    else {
                        firstNumber += elem.target.textContent.trim();
                        containerScreen.textContent += elem.target.textContent.trim(); 
                    };
                }
                else{
                        if (secondNumber === '' && elem.target.textContent === '.') {
                            containerScreen.textContent = "ERROR";
                        }
                        else if (secondNumber.indexOf('.') > -1 && elem.target.textContent === '.') {
                            console.log('only 1 "." in secondNumber :D');
                        }
                        else {
                            secondNumber += elem.target.textContent.trim();
                            containerScreen.textContent += elem.target.textContent.trim();
                        };  
                    };
            }
            else if ( choiceOperator.includes(elem.target.textContent) ) {
                if (firstNumber === '-' && choiceOperator.includes(elem.target.textContent)) { 
                    containerScreen.textContent = 'ERROR';
                    firstNumber = '';
                    operatorSign = '';
                } 
                else if (!operatorSign && firstNumber) {
                    operatorSign = elem.target.textContent.trim();
                    containerScreen.textContent += elem.target.textContent.trim();
                }
                else if (elem.target.textContent === '-' && firstNumber === '' && containerScreen.textContent !== 'ERROR') {  
                    firstNumber += elem.target.textContent.trim();
                    containerScreen.textContent += elem.target.textContent.trim();
                }
                else if (firstNumber === '') {
                    containerScreen.textContent = 'ERROR';
                }
                else if (elem.target.textContent !== operatorSign && firstNumber && !secondNumber) {
                    operatorSign = elem.target.textContent.trim();
                    containerScreen.textContent = `${firstNumber}${operatorSign}`;
                }
                else if (elem.target.textContent === operatorSign && firstNumber && secondNumber) {
                    if (operate(firstNumber, operatorSign, secondNumber) === 'ERROR') {
                        containerScreen.textContent = 'ERROR';
                        firstNumber = '';
                        operatorSign = '';
                        secondNumber = '';
                    }
                    else {
                        containerScreen.textContent = `${operate(firstNumber, operatorSign, secondNumber)}${elem.target.textContent.trim()}`;
                        firstNumber = operate(firstNumber, operatorSign, secondNumber); 
                        operatorSign = elem.target.textContent.trim(); 
                        secondNumber = ''; 
                    };
                }
                else {
                    if (operate(firstNumber, operatorSign, secondNumber) === 'ERROR') {
                        containerScreen.textContent = 'ERROR';
                        firstNumber = '';
                        operatorSign = '';
                        secondNumber = '';

                    }
                    else {
                        containerScreen.textContent = `${operate(firstNumber, operatorSign, secondNumber)}${elem.target.textContent.trim()}`;
                        firstNumber = operate(firstNumber, operatorSign, secondNumber); 
                        operatorSign = elem.target.textContent.trim(); 
                        secondNumber = ''; 
                    }; 
                };
         
            }
            else {};
        
            console.log(`firstNumber is: ${firstNumber}`);
            console.log(`operatorSign is: ${operatorSign}`); 
            console.log(`secondNumber is: ${secondNumber}`);
            console.log(containerScreen.textContent);

        } ); 
    } );

    equal.addEventListener('click', (elem) => {
        if (String(firstNumber) && operatorSign && secondNumber) {      
            containerScreen.textContent = operate (firstNumber, operatorSign, secondNumber);
            firstNumber = '';
            operatorSign = '';
            secondNumber = '';
            return operate(firstNumber, operatorSign, secondNumber);
        }
        else {
            containerScreen.textContent = 'ERROR';   
        };
    } );

    clearAll.addEventListener('click', (elem) => {
        containerScreen.textContent = ''; 
        firstNumber = '';
        operatorSign = '';
        secondNumber = ''; 
    } );

    clearOne.addEventListener('click', (elem) => { 
        if (firstNumber && !operatorSign) {
            let firstNumberCleared = String(firstNumber).slice(0, -1); 
            firstNumber = firstNumberCleared;
            containerScreen.textContent = firstNumber;  
        }
        else if (firstNumber && operatorSign && !secondNumber) {
            let operatorSignCleared = String(operatorSign).slice(0, -1);
            operatorSign = operatorSignCleared;
            containerScreen.textContent = firstNumber + operatorSign;
        }
        else if (firstNumber && operatorSign && secondNumber) {
            let secondNumberCleared = String(secondNumber).slice(0, -1);
            secondNumber = secondNumberCleared;
            containerScreen.textContent = firstNumber + operatorSign + secondNumber;
        }
        else {
            containerScreen.textContent = 'ERROR';
        }
    } );
};    
  
console.log( inputCalculation() );    