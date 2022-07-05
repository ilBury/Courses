//FIRST TASK
let strFirst = 'aaa@bbb@ccc<br />';
document.write(strFirst.replace(/@/g, '!'));

//SECOND TASK
let strSecond = '2025-12-31<br />';
document.write(strSecond.replace(/(2025)-(12)-(31)/, '$3/$2/$1'));

//THIRD TASK 
let strThird = 'Я учу javascript!<br />';
document.write(strThird.substr(1, 4));
document.write(strThird.substring(1, 5));
document.write(strThird.slice(1, 5));

//FOURTH TASK
let arrFourth = [4, 2, 5, 19, 13, 0, 10];
let sumCube = 0;
for(let i = 0; i < arrFourth.length; i++) {
    sumCube += Math.pow(arrFourth[i], 3);
}
document.write('<br />' + Math.sqrt(sumCube));

//FIFTH TASK
let a = 3;
let b = 5;
let c = Math.abs(a - b);
document.write('<br />' + c);

//SIXTH TASK ???

//SEVENTH TASK
let strSventh = 'aa aba abba abbba abca abea';
let regex = /[a][b]+[a]/g; 
let result = strSventh.match(regex);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]); 

//EIGHTH TASK
let num = '+375 (44) 531-08-29';
let testPhoneNum = function(a) {
let regexEighth = /^\+375 ?\(?(44|25|33|29|17)\)? ?[1-9][0-9]{2}[ -]?[0-9]{2}[ -]?[0-9]{2}$/gm;
return console.log(regexEighth.test(a));
}
testPhoneNum(num); 


//NINTH TASK
let email = 'ilyabro22@mail.ru';
let testEmail = function(b) {
    let regexpEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gmi;
    return console.log(regexpEmail.test(b));
}
testEmail(email); 


//TENTH TASK
let urlAdr = '';
let testUrl = function(c) {
    let regexpEmail = /^(https?:\/\/[a-z0-9]+(?:-|\.)?[a-z0-9]+\.[a-z]{2,11}\/?)(\/?[^\?\?\s#]+\/?)?(\?[^\s#]+)?(#[a-z0-9]+)?$/gmi;
    return console.log(regexpEmail.test(c));
}
testUrl(urlAdr); 