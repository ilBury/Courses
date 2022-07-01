//FIRST TASK
/* let arr1 = [1, 2, 3, 4, 5];
for(let i = 0; i < arr1.length; i++) {
    document.write(arr1[i] + " ");
}
document.write("<br />");

//SECOND TASK
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i = 0; i < arr2.length; i++) {
    if((arr2[i] > -10) && (arr2[i] < -3)) {
        document.write(arr2[i] + " ");
    }
}
document.write("<br />");

//THIRD TASK
let arr3 = [];
let result = 0;
for(let i = 0; i < 57 - 23; i++) {
    arr3[i] = 23 + i;
    result += arr3[i];
    document.write(arr3[i] + " ");
}
document.write("<br/>Сумма: " + result);
document.write("<br />");
let arr4 = [];
let count = 0;
while(true) {
    arr4[count] = 23 + count;
    document.write(arr4[count] + " ");
    count++;
    if(count >= 57 - 23) break;
}
document.write("<br />");

//FOURTH TASK
let arr5 = ['10', '20', '30', '50', '235', '3000'];
let temp;
for(let i = 0; i < arr5.length; i++) {
    temp = arr5[i];
    if(temp[0] == '1' || temp[0] == '2' || temp[0] == '5') document.write(arr5[i] + " ");
}
document.write("<br />");

//FIFTH TASK
let arr6 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for(let i = 0; i < arr6.length; i++) {
    if(i == 5 || i == 6) {
        document.write(`<b>${arr6[i]}</b> `);
    } else
    document.write(arr6[i] + " ");
}
document.write("<br />");

//SIXTH TASK
let arr7 = [2, 3, 4, 5, 6];
document.write(arr7[arr7.length] = 7);
document.write("<br />"); */

//SEVENTH TASK
/* let firstNum = prompt('Введите первое число');
let arr8 = [];
let count = 0;
while(firstNum != '' || isNaN(firstNum)) {
arr8[count] = Number(firstNum);
count++;
firstNum = prompt('Введите первое число');
}
for(let i = 0; i < arr8.length; i++) {
    document.write(arr8[i] + " ");
}
document.write("<br />");
let temp;
for(let i = 0; i < arr8.length; i++) {
    for(let j = 0; j < arr8.length; j++) {
        if(arr8[j] < arr8[j - 1]) {
            temp = arr8[j];
            arr8[j] = arr8[j - 1];
            arr8[j - 1] = temp;
        }
    }
}
for(let i = 0; i < arr8.length; i++) {
    document.write(arr8[i] + " ");
} */

//EIGHTH TASK
/* let arr9 = [12, false, 'Текст', 4, 2, -5, 0]
let resultArr9 = arr9.reverse();
for(let i = 0; i < resultArr9.length; i++) {
    document.write(resultArr9[i] + " ");
} */

//NINTH TASK 
/* let arr10 = [5, 9, 21, , , 9, 78, , , , 6];
let count = 0;
for(let i = 0; i < arr10.length; i++) {
    if(arr10[i] == undefined) count++;
}
document.write(`количество пустых элементов массива: ${count}`); */

//TENTH TASK
/* let arr11 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
let sum = 0;
let countAllNull = 0;
let countCurrentlyNull = 0;
for(let i = 0; i < arr11.length; i++) {
    if(arr11[i] == 0) countAllNull++;
}
for(let i = 0; i < arr11.length; i++) {
    if(arr11[i] == 0) {
        for(let j = i; j < arr11.length; j++, i++) {
        if(arr11[j] == 0) countCurrentlyNull++;
        sum += arr11[i];
        if(arr11[j] == 0 && countAllNull == countCurrentlyNull) break;
        }    
    }
    if(countAllNull == countCurrentlyNull) break;
}
document.write("Сумма элементов между первым и последним нулем массива: " + sum); */

//ELEVENTH TASK
let temp = prompt('Введите высоту пирамиды');
let height = Number(temp);
let currentHeight = 0;
let width = height * 2 - 1;
let count = 0;
let countSym = 0;
let empty = ' ';
let symbol = '^';
let resultArr = [];
for(let i = 0; i < height; i++) {
    resultArr[i] = [];
    currentHeight++;
    for(let j = 0; j < width; j++) {      
        if(count == height - currentHeight) {    
            resultArr[i][j] = symbol;
            countSym++;      
            if(countSym == currentHeight * 2 - 1) {
                count = 0;
                countSym = 0;
            }           
        } else {
            resultArr[i][j] = empty;
            count++;
        }   
    }   
    count = 0;
}
for(let i = 0; i < height; i++) {
    for(let j = 0; j < width; j++) {
        document.write(resultArr[i][j]);
    }
    document.write("<br />   ");
}