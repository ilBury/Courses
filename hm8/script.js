let title = document.createElement('title');
title.innerHTML = 'homework8';

let meta = document.createElement('meta');
meta.setAttribute('charset','UTF-8');

document.head.appendChild(meta);
document.head.appendChild(title);

let section1 = document.createElement('section');
section1.classList.add('block');
document.body.appendChild(section1);

let h1ForSection1 = document.createElement('h1');
h1ForSection1.innerHTML = 'Choose Your Option';
let spanForSection1 = document.createElement('span');
spanForSection1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
section1.appendChild(h1ForSection1);
section1.appendChild(spanForSection1);


let section2 = document.createElement('section');
section2.classList.add('block');
document.body.appendChild(section2);

let divDown = document.createElement('div');
divDown.classList.add('div__Down');
section2.appendChild(divDown);

let divLeft = document.createElement('div');
divLeft.classList.add('card_left');
divDown.appendChild(divLeft);


let spanLeftUp = document.createElement('span');
spanLeftUp.innerHTML = 'FREELANCER';
let h2Left = document.createElement('h1');
h2Left.innerHTML = 'Initially designed to';
let spanLeftDown = document.createElement('span');
spanLeftDown.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
let buttonLeft = document.createElement('button');
buttonLeft.classList.add('btn');
buttonLeft.innerHTML = 'START HERE';

divLeft.appendChild(spanLeftUp)
divLeft.appendChild(h2Left);
divLeft.appendChild(spanLeftDown);
divLeft.appendChild(buttonLeft);

let divRight = document.createElement('div');
divRight.classList.add('card_right');
divDown.appendChild(divRight);


let spanRightUp = document.createElement('span');
spanRightUp.innerHTML = 'STUDIO';
let h2Right = document.createElement('h1');
h2Right.innerHTML = 'Initially designed to';
let spanRightDown = document.createElement('span');
spanRightDown.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
let buttonRight = document.createElement('button');
buttonRight.classList.add('btn');
buttonRight.innerHTML = 'START HERE';

divRight.appendChild(spanRightUp)
divRight.appendChild(h2Right);
divRight.appendChild(spanRightDown);
divRight.appendChild(buttonRight);




let style = document.createElement('style');
document.head.appendChild(style);

style.innerHTML = `
* {
    margin: 0;
    padding: 0;
}

body {
    font-size: 18px;
}

h1 {
    font-family: 'Arvo';
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #212121;
}

.block {
    text-align: center;
    width: 50%;
    max-width: 1530px;
    margin: 0 auto;
}

.block .div__Down {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
}

.card_left {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    width: calc(50% - 95px - 95px);
    padding: 80px 95px;
    border: 1px solid #E8E9ED;
    border-radius: 5px;
    
}

.card_right {
    display: flex;
    align-items: center;
    flex-direction: column;
    
    width: calc(50% - 95px - 95px);
    background: #8F75BE;
    padding: 80px 95px;
    color: #FFFFFF;

}

.btn {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
    letter-spacing: 2.4px;
    margin-top: 60px;
    padding: 20px 25px;
    background-color: transparent;
    border: 3px solid #FFC80A;
    border-radius: 30px;
    cursor: pointer;
}

`