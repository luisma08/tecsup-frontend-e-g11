'use strict';

const documentReady = () => {
    const calculatorform= document.getElementById('calculatorform');

    const calculate = (e)=>{
        e.preventDefault();
        const number1= document.getElementById('number1').value;
        const operator= document.getElementById('operator').value;
        const number2= document.getElementById('number2').value;
        let calcular;
        if(operator == "-"){
            calcular = parseFloat(number1) - parseFloat(number2);
        } else if(operator == "+"){
            calcular = parseFloat(number1) + parseFloat(number2);
        } else{
            calcular = parseFloat(number1) / parseFloat(number2);
        }
        alert(calcular);
    };
    calculatorform.addEventListener('submit', calculate);
};

document.addEventListener('DOMContentLoaded', documentReady);