
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
    };
};

let firstNumber = '';
let operatorSign = '';
let secondNumber = '';
let choiceOperator = ['+', '-', '*', '/'];

const containerCalculator = document.querySelector('.containerCalculator');
const containerScreen = document.querySelector('.containerScreen');
const containerNumbers = document.querySelectorAll('.containerNumbers');
const clearAll = document.querySelector('.clearAll');
const equal = document.querySelector('.equal');

function inputCalculation () {
    containerNumbers.forEach( (item) => { 
        item.addEventListener('click', (elem) => {
            if ( !choiceOperator.includes(elem.target.textContent) ) {
                if (!operatorSign) {
                    firstNumber += elem.target.textContent.trim();
                    containerScreen.textContent += elem.target.textContent.trim(); 
                }
                else{
                    secondNumber += elem.target.textContent.trim();
                    containerScreen.textContent += elem.target.textContent.trim();
                };
            }
            else if ( choiceOperator.includes(elem.target.textContent) ) {
                if (!operatorSign && firstNumber) {
                    operatorSign = elem.target.textContent.trim();
                    containerScreen.textContent += elem.target.textContent.trim();
                }
                else if (elem.target.textContent !== operatorSign && firstNumber && !secondNumber) {
                    operatorSign = elem.target.textContent.trim();
                    containerScreen.textContent = `${firstNumber}${operatorSign}`;
                }
                else if (elem.target.textContent === operatorSign && firstNumber && secondNumber) {
                    containerScreen.textContent = `${operate(firstNumber, operatorSign, secondNumber)}${elem.target.textContent.trim()}`;
                    firstNumber = operate(firstNumber, operatorSign, secondNumber); 
                    operatorSign = elem.target.textContent.trim(); 
                    secondNumber = ''; 
                }
                else {
                    containerScreen.textContent = `${operate(firstNumber, operatorSign, secondNumber)}${elem.target.textContent.trim()}`;
                    firstNumber = operate(firstNumber, operatorSign, secondNumber); 
                    operatorSign = elem.target.textContent.trim(); 
                    secondNumber = '';  
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
        if (firstNumber === '' || operatorSign === '' || secondNumber === '') {
            containerScreen.textContent = "ERROR";
        }
        else {      
            containerScreen.textContent = operate (firstNumber, operatorSign, secondNumber);
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

};    
  
console.log( inputCalculation() );    
 