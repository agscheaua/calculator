
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
    else if (operator === '/' && secondOperand === '0.') {
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
        item.addEventListener('mousedown', (elem) => { 
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
                            firstNumber = '';
                            operatorSign = '';
                        }
                        else if (secondNumber.indexOf('.') > -1 && elem.target.textContent === '.') {
                            console.log('only 1 "." in secondNumber :D');
                        }
                        else if (containerScreen.textContent === 'ERROR' && firstNumber && operatorSign) {
                            containerScreen.textContent = 'ERROR';
                            firstNumber = '';
                            operatorSign = '';
                        }
                        else {
                            secondNumber += elem.target.textContent.trim();
                            containerScreen.textContent += elem.target.textContent.trim();
                        };  
                    };
            }
            else if ( choiceOperator.includes(elem.target.textContent.trim()) ) {
                if (firstNumber === '-') { 
                    containerScreen.textContent = 'ERROR';
                    firstNumber = ''; 
                    operatorSign = '';
                } 
                else if (elem.target.textContent.trim() !== '-' && !firstNumber) {
                    containerScreen.textContent = 'ERROR';
                    firstNumber = ''; 
                    operatorSign = '';
                }
                else if (elem.target.textContent === '-' && firstNumber === '' && containerScreen.textContent) {
                    containerScreen.textContent = '';  
                    firstNumber += elem.target.textContent.trim();
                    containerScreen.textContent += elem.target.textContent.trim();
                }
                else if (firstNumber === '') {
                    firstNumber += elem.target.textContent.trim(); 
                    containerScreen.textContent += elem.target.textContent.trim(); 
                }
                else if (!operatorSign && firstNumber) {
                    operatorSign = elem.target.textContent.trim();
                    containerScreen.textContent += elem.target.textContent.trim();
                }
                else if (firstNumber && operatorSign && secondNumber === '' && secondNumber.indexOf('-') === -1) {
                    secondNumber = elem.target.textContent;
                    containerScreen.textContent += elem.target.textContent;
                }
                else if (firstNumber && operatorSign && secondNumber.indexOf('-') > -1 && elem.target.textContent === '-') {
                    containerScreen.textContent = 'ERROR';
                    firstNumber = '';
                    operatorSign = '';
                    secondNumber = '';
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
            firstNumber = '';
            operatorSign = '';
            secondNumber = '';
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
        else if (containerScreen.textContent === 'ERROR') {
            containerScreen.textContent = '';
        }
        else if (containerScreen.textContent !== 'ERROR') {
            let containerScreenClearedMouse = containerScreen.textContent.slice(0, -1);
            containerScreen.textContent = containerScreenClearedMouse;
        }
        else {
            containerScreen.textContent = 'ERROR';
        }
    } );
};      
console.log( inputCalculation() );    

const numbersOperands = ['1','2','3','4','5','6','7','8','9','0']; 
const pointFloat = ['.'];
choiceOperator = ['+', '-', '*', '/'];
const equalButton = ['Enter'];
const clearAllInputs = ['`'];
const clearOneInput = ['Backspace'];
 
function inputCalculationKeyboard () {
    document.body.addEventListener('keydown', (elem) => {
        if (numbersOperands.includes(elem.key) && !operatorSign ) { 
            if (containerScreen.textContent && !firstNumber) {
                containerScreen.textContent = '';
                firstNumber += elem.key;
                containerScreen.textContent += elem.key;
            }
            else if (firstNumber === '') {
                firstNumber += elem.key;; 
                containerScreen.textContent += elem.key;
            }
            else if (firstNumber && !operatorSign) { 
                firstNumber += elem.key;    
                containerScreen.textContent += elem.key;
            }
            else {}; 
        }

        else if (pointFloat.includes(elem.key) && firstNumber && !secondNumber) {
            if (firstNumber.indexOf('.') === -1) {
                firstNumber += elem.key;
                containerScreen.textContent += elem.key;
            }
            else if (firstNumber.indexOf('.') > -1) {
                console.log('only 1 "." in 1st nr.');
            }
            else {};
        }

        else if (pointFloat.includes(elem.key) && firstNumber && secondNumber) {
            if (secondNumber.indexOf('.') === -1) {
                secondNumber += elem.key;
                containerScreen.textContent += elem.key;
            }
            else if (secondNumber.indexOf('.') > -1) {
                console.log('only 1 "." in 2nd nr.');
            }
            else {};
        }

        else if (choiceOperator.includes(elem.key) ) {
            if (containerScreen.textContent && elem.key === '-' && firstNumber === '') {
                containerScreen.textContent = '';
                firstNumber += elem.key;
                containerScreen.textContent += elem.key; 
            }
            else if (elem.key === '-' && firstNumber.indexOf('-') === -1 && firstNumber === '') {
                firstNumber += elem.key;
                containerScreen.textContent += elem.key;
            }
            else if (elem.key === '-' && firstNumber === '-') {
                containerScreen.textContent = 'ERROR';
            }
            else if (firstNumber.indexOf('-') > -1 && !operatorSign) {
                operatorSign = elem.key;
                containerScreen.textContent += elem.key;
            }
            else if (choiceOperator.includes(elem.key) && firstNumber === '') {
                containerScreen.textContent = 'ERROR';
            } 
            else if (firstNumber && !operatorSign) {
                operatorSign += elem.key;
                containerScreen.textContent += elem.key;
            } 
            else if (secondNumber.indexOf('-') > -1 && elem.key === '-') {
                containerScreen.textContent = 'ERROR';
                firstNumber = '';
                operatorSign = '';
                secondNumber = '';
            }
            else if (firstNumber && operatorSign && elem.key === '-' && secondNumber.indexOf('-') === -1 && secondNumber === '') {
                secondNumber += elem.key;
                containerScreen.textContent += elem.key;
            }
            else if (firstNumber && operatorSign && elem.key !== operatorSign && !secondNumber) {
                operatorSign = elem.key;
                containerScreen.textContent = firstNumber+operatorSign;
            }
            else if (firstNumber && operatorSign === '/' && ( secondNumber === '0' || secondNumber === '0.0' || secondNumber === '0.') ) {
                containerScreen.textContent = 'ERROR';
                firstNumber = '';
                operatorSign = '';
                secondNumber = '';
            }
            else if (firstNumber && operatorSign && secondNumber) {
                let initialResult = String(operate(firstNumber, operatorSign, secondNumber));
                firstNumber = initialResult; 
                operatorSign = elem.key;
                secondNumber = '';
                containerScreen.textContent = firstNumber+operatorSign;
            }
            else {}; 
        }

        else if (numbersOperands.includes(elem.key) && firstNumber && operatorSign) {
            if (numbersOperands.includes(elem.key) ) {
                secondNumber += elem.key;
                containerScreen.textContent += elem.key;
            } 
            else {};
        }

        else {};
        

        if (equalButton.includes(elem.key) ) {
            if (firstNumber && operatorSign && secondNumber) {
                containerScreen.textContent = operate(firstNumber, operatorSign, secondNumber);
                firstNumber = '';
                operatorSign = '';
                secondNumber = '';
            }
            else {
                containerScreen.textContent = 'ERROR';
                firstNumber = '';
                operatorSign = '';
                secondNumber = '';
            }
        }
        else {};  

        if (clearAllInputs.includes(elem.key) ) {
            containerScreen.textContent = '';
            firstNumber = '';
            operatorSign = '';
            secondNumber = '';
        }
        else {};
        
        if (clearOneInput.includes(elem.key) ) {
            if (firstNumber && !operatorSign) { 
                let firstNumberCleared = firstNumber.slice(0, -1);
                firstNumber = firstNumberCleared;
                containerScreen.textContent = firstNumber;  
            }
            else if (firstNumber && operatorSign && !secondNumber) {
                let operatorSignCleared = operatorSign.slice(0, -1);
                operatorSign = operatorSignCleared;
                containerScreen.textContent = firstNumber + operatorSign;
            }
            else if (firstNumber && operatorSign && secondNumber) {
                let secondNumberCleared = secondNumber.slice(0, -1);
                secondNumber = secondNumberCleared;
                containerScreen.textContent = firstNumber + operatorSign + secondNumber;
            }
            else if (containerScreen.textContent === 'ERROR') {
                containerScreen.textContent = '';
            }
            else if (containerScreen.textContent !== 'ERROR') {
                let containerScreenCleared = containerScreen.textContent.slice(0, -1);
                containerScreen.textContent = containerScreenCleared;
            }
            else {};
        }
        else {};
    
    console.log(`firstNumber is: ${firstNumber}`);
    console.log(`operatorSign is: ${operatorSign}`); 
    console.log(`secondNumber is: ${secondNumber}`);
    console.log(containerScreen.textContent);

    } );
 


};
console.log(inputCalculationKeyboard() ); 






        