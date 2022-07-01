//FIRST TASK 
/* alert("Заполните маленькую анкету для посещения этого сайта");
let name = prompt("Укажите ваше имя");
let age = prompt("Укажите ваш возраст");
let city = prompt("Укажите ваш город проживания");
let phone = prompt("Укажите ваш телефон");
let email = prompt("Укажите @mail");
let company = prompt("И укажите команию в которой вы работаете");
document.write(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}`) */


//SECOND TASK
/* let name = prompt("Укажите ваше имя");
let age = prompt("Укажите ваш возраст");
let year = 2022 - parseInt(age);
document.write(`${name} родился в ${year} году, или в ${year - 1} году`); //пишет, что name - устарело, почему? */


//THIRD TASK
/* while(true) {
    let numbers = prompt("Введите число из 6 цифр");
    // console.log(typeof parseInt(numbers));
     if(numbers.length != 6 || isNaN(Number(numbers))) {
        alert('неправильно введенные данные!');
        true;
    } else {
        if((parseInt(numbers[0]) + parseInt(numbers[1]) + parseInt(numbers[2])) == (parseInt(numbers[3]) + parseInt(numbers[4]) + parseInt(numbers[5]))) {
            alert('yep'); break;
        } else alert('no'); break;
        

    } 
} */


//FOURTH TASK
/* let a = prompt("Введите число");
parseInt(a) > 0 ? alert("Верно") : alert("Неверно"); */


//FIFTH AND SIXTH TASK
/* let a = 10,
    b = 2;
document.write(`Сумма: ${a+b}\nРазность: ${a-b}\nПроизведение: ${a*b}\nЧастное: ${a/b}\n`);
a + b > 1 ? document.write("Квадрат суммы:\t" + Math.pow(a+b, 2)) : document.write("Сумма не больше 1.");   
(a > 2 && a < 11) || (b >= 6 && b < 14) ? alert('Верно!') : alert('Неверно!'); */


//SEVENTH TASK
/* while(true) {
    let n = prompt('Введите число от 0 до 59');
    if(n < 0 || n > 59 || isNaN(Number(n))) {
        alert('Неправильный ввод числа!'); 
        true;
    } else {
        let result = Math.trunc(n/15);
        switch(result) {
            case 0: alert('Первая четверть часа'); break;
            case 1: alert('Вторая четверть часа'); break;
            case 2: alert('Третья четверть часа'); break;
            case 3: alert('Четвертая четверть часа'); break;
        }   
        break;
    }
} */

//EIGHTH AND TENTH TASK
/* while(true) {
    let n = prompt('Введите число от 1 до 31');
    if(n < 1 || n > 31 || isNaN(Number(n))) {
        alert('Неправильный ввод числа!'); 
        true;
    } else {
        let result = Math.trunc(n/10);
        switch(result) {
            case 0: alert('Первая декада месяца'); break;
            case 1: alert('Вторая декада месяца'); break;
            case 2: alert('Третья декада месяца'); break;
            case 3: alert('Третья декада месяца'); break;
        }   
        break;
    }
} 

//NINTH TASK
/* while(true) {
    let days = prompt('Введите любое количество дней');
    if(days < 0 || isNaN(Number(days))) {
        alert('Неправильный ввод числа!'); 
        true;
    } else { 
        1 > Math.trunc(days / 365) ? years = "Меньше года" : years =  `${days / 365} года(лет)`;
        1 > Math.trunc(days / 31) ? months = "Меньше месяца" : months = `${days / 31} месяца(месяцев)`;
        1 > Math.trunc(days / 7) ? weeks = "Меньше недели" : weeks =  `${days / 7} недели(недель)`;
        let hours = `${days * 24} часа(часов)`;
        let minutes = `${days * 1440} минут(минуты)`;
        document.write(`${years}\n${months}\n${weeks}\n${hours}\n${minutes}`); break;
    }
}  */


//TENTH TASK
 let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
while(true) {
    let days = prompt('Введите любое количество дней');
    if(days < 0 || days > 365 || isNaN(Number(days))) {
        alert('Неправильный ввод числа!'); 
        true;
    } else { 
        for(let i = 0; i < month.length; i++) {
            if(i == Math.trunc(days / 31)) alert(month[i]);
        }
    }
}   