//FIRST TASK
/* for(let i = 1; i <= 50; i++) {
    document.write(i + '\t')
}
document.write("\n");
for(let i = 35; i >=8; i--) {
    document.write(i + "\t");
}
document.write("\n"); */

//SECOND TASK
/* let a = 89;
while(a > 10) {
    document.write(a + "<br />");
    a--;
}
 */

//THIRD TASK
/* let result = 0;
for(let i = 0; i <= 100; i++) {
    result += i ;
}
document.write("Сумма от 0 до 100: " + result); */

//FOURTH TASK
/* let result = 0
for(let i = 1; i < 6; i++) {
    let count = 1;  
    while(count <= i) {
        result += count;
        count++;
    }
}
document.write("Итог: " + result); */

//FIFTH TASK
/* for(let i = 8; i < 57; i++) {
    if(i % 2 == 0) {
        document.write(i + " ");
    }
} 
let flag = true;
let count = 8;
while(flag) {
    if(count == 58) {
       flag = false;
    }else {
    document.write(count + " ");
    count += 2;
    }
} */

//SIXTH TASK
/* for(let i = 2; i < 10; i++) {
    for(let j = 2; j < 10; j++) {
        document.write(i + "*" + j + "=" + i*j + "<br />");
    }
    document.write("...\n");
} */

//SEVENTH TASK
/* let num = 0;
for(let n = 1000; n > 50; n++) {
    n /= 2;
    num++;
}
alert(num); */

//EIGHTH TASK
/* let flag = true;
let sum = 0;
while(flag) {
    let num = prompt('Введите число');
    if(isNaN(Number(num))) {
        alert('Вы ввели не число');
    } else if(num == "" || Number(num) == 0) {
        flag = false;
    }else {
        sum += Number(num);
    }
}
alert(`Сумма введенных чисел: ${sum}\nСреднее арифметическое введенных чисел: ${sum/2}`); */

//NINTH TASK
/* let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57"
let min = 21312321321321;
let arr = [];
let max = 0;
let tmp;
for(let i = 0, j = 0; i < str.length; i++) {
  if(str[i] != " ") {
    if(str[i + 1] != " ") {
        tmp = str[i] + str[i + 1];
        arr[j] = Number(tmp);
        tmp = 0;
        j++;
        i++;
        continue;
    } else {
        arr[j] = str[i];
        j++;
        continue;
    }
  }
}
for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) min = arr[i];
    if(arr[i] > max) max = arr[i];
}
document.write(`Максимальное значение: ${max}\nМинимальное значение: ${min}`); */


//TENTH TASK
let flag = true;
let allNumeral = [];
let reverseNum = [];
let countNum = 0;
let sumNum = 0;
while(flag) {
    let num = prompt("Press tally");
    if(isNaN(Number(num))) {
        alert('Вы ввели не число');
    } else {
        for(let i = 0, j = 0; i < num.length; j++, i++) {
            allNumeral[j] = Number(num[i]);
            countNum++;
            sumNum += allNumeral[j];
        }
        flag = false;
    }    
}
for (let i = 0; i < allNumeral.length; i++) {
    document.write(allNumeral[i] + "\t");
}
document.write(`\nКоличество цифр числа: ${countNum}\nСумма цифр числа: ${sumNum}\n`);
document.write("Оратный массив: ");
for(let i = allNumeral.length - 1, j = 0; i >= 0; j++, i--) {
    reverseNum[j] = allNumeral[i];
    document.write(`${reverseNum[j]}\t`);
}