//FIRST TASK
/* const first = function(a, b, c) {
return document.write((a - b) / c);
}
first(1,2,3); */

//SECOND TASK
/* const second = function(a) {
    let two = a*a;
    let three = a*a*a;
    return [two, three];
}
let result = second(5);
for(let i = 0; i < result.length; i++) {
    document.write(result[i] + " ");
} */

//THIRD TASK
/* const min = function(a, b) {
    if(a > b) {return b;}
    else {return a;}
}
const max = function(a, b) {
    if(a > b) {return a;}
    else {return b;}
}
console.log(min(2,3));
console.log(max(2,3)); */

//FOURTH TASK
/* let arr = [20, 10, 15, 22, 25, 1, 6, 4, 19, 11, 90];
const arrNum = function(arrResult) {
    let temp = prompt('введите диапазон чисел для массива');
    for(let i = 0; i < arrResult.length; i++) {
        if(arrResult[i] > Number(temp)) {
            arrResult.splice(i, 1);
            i--;
        } 
        
    }
    return arrResult;
}
const arrNumWrite = function() {
    let tempArr = arrNum(arr);
    for(let i = 0; i < tempArr.length; i++) {
        document.write(tempArr[i] + " ");
    }
}
arrNumWrite(); */

//FIFTH AND SIXTH TASK
/* let num = prompt('Введите любое число');
let isEven = function(inputNum) {
    if(inputNum % 2 == 0) return true;
    else return false;
}
console.log(isEven(Number(num)));
let arr = [20, 10, 15, 22, 25, 1, 6, 4, 19, 11, 90];
let isEvenArr = function(arrTemp) {
    for(let i = 0; i < arrTemp.length; i++) {
        if(isEven(arrTemp[i])) continue;
        else arrTemp.splice(i, 1); i--;
    }
    return arrTemp;
}
console.log(isEvenArr(arr)); */

//SEVENTH TASK
/* let piramyd = function(Rows, ...args) {  
    for(let i = 1; i <= Rows; i++) {
        for(let j = 1; j <= i; j++) {
            if(args != 0) {
                document.write(args + " ");
            } else {
            document.write(i + " ");
            }
        }
        document.write("<br />");
    }

}
piramyd(11, "*"); */

//EIGHTH TASK


//NINTH TASK
/* let fibonachi = function() {
    let arr = [0, 1];
    for(let i = 1;;i++) {
        arr.push(arr[i] + arr[i - 1]);       
        if(arr[arr.length - 1] >= 1000) {
            arr.splice(arr.length - 1, 1);
            break;
        } 
    }
    return arr;
}
console.log(fibonachi()); */

//TENTH TASK
let resultNum = 0;
let sumNum = function(a) {
    a = String(a)
    let arr = a.split('');
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        resultNum += Number(arr[i]);
    }
    if(resultNum >= 9) {
        return resultNum;
    } else {
      return  sumNum(a);
    }
}
console.log(sumNum());

//ELEVENTH TASK
