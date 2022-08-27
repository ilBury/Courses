window.addEventListener('load', function() {

    let num = this.document.querySelectorAll('.num');
    let output = this.document.querySelector('.output');
    let calculate = this.document.querySelectorAll('.calculate');
    let equals = this.document.querySelector('.equals');
    let clear = this.document.querySelector('.clear');
    let procent = this.document.querySelector('.procent');

    //объект, хранящий два операнда
    let calcData = {}
    
    //флаг для проверки вычисления
    let checkCalc = false;

    //проверка на конкретное вычисление
    let whatCalc = ''

    //функции вычислений
    let computePlus = function(first, second) {
        return first + second;
    }

    let computeMinus = function(first, second) {
        return first - second;
    }

    let computeMultiplied = function(first, second) {
        return first * second;
    }

    let computeDivide = function(first, second) {
        return first / second;
    }



    num.forEach(function(element) {

        element.addEventListener('click', function(event) {

            output.classList.remove('repainting');  
            
            if(checkCalc) {
                output.value = element.innerHTML;
                checkCalc = false;
            } else {
                output.value += element.innerHTML;
            }
            
        });

    });



    calculate.forEach(function(element) {

        element.addEventListener('click', function(event) {
            checkCalc = true;
            whatCalc = element.classList.item(1);

            calcData.firstOperand = Number(output.value);
            
            output.classList.add('repainting');    
            
        });

    });


    equals.addEventListener('click', function(event) {
        checkCalc = true;
        let temp;
        
        output.classList.remove('repainting');  

        calcData.secondOperand = Number(output.value);
        
        switch(whatCalc) {
            case 'divide' : output.value = computeDivide(calcData.firstOperand, calcData.secondOperand); break;
            case 'multiplied': output.value = computeMultiplied(calcData.firstOperand, calcData.secondOperand); break;
            case 'minus': output.value = computeMinus(calcData.firstOperand, calcData.secondOperand); break;
            case 'plus': output.value = computePlus(calcData.firstOperand, calcData.secondOperand); break;
        }

        delete calcData;
    });


    clear.addEventListener('click', function(event) {
        output.value = '';
        delete calcData;
    });

    procent.addEventListener('click', function(event) {
        output.value = Number(output.value) / 100;
    });


});