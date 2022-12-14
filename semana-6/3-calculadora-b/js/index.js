'use strict';

const documentReady = () => {
    const calculatorform= document.getElementById('calculatorform');

    const calculate = (e)=>{
        e.preventDefault();
        const number1= parseFloat(document.getElementById('number1').value);
        const operator= document.getElementById('operator').value;
        const number2= parseFloat(document.getElementById('number2').value);
        const resultContainer=document.getElementById('resultContainer');

        let result;
        switch (operator){
            case '-':
                result = number1 - number2;
                break;
            case '+':
                result = number1 + number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number1 / number2;
                break;
        }
        resultContainer.innerText = result;
    };
    calculatorform.addEventListener('submit', calculate);
};

document.addEventListener('DOMContentLoaded', documentReady);