'use strict';

  let randomNum = parseInt(Math.random() * 100);  //замкнутая переменная

function isNum(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function guessNum(serNum) {
    
function guess() {
  let userNum = prompt('Угадай число от 1 до 100', ''); 

 if (userNum === null) {               //если нажал отмена
   alert(`Игра окончена`);
  } 

 if (isNaN(userNum)) {                //ввел строку
   alert('Введи число!');
 return guess(userNum)
  }

 if (userNum === null) {             
 return
  }

 if (!isNum(userNum)) {               //проверка на число
   userNum = +userNum;
  }

 else if (userNum > randomNum) {
   alert('Загаданное число меньше');
 return guess(userNum)
  } 

 else if (userNum < randomNum) {
   alert('Загаданное число больше');
 return guess(userNum)
 }

 else if (userNum !== Number) {                  // 
   alert('Поздравляю, Вы угадали!!!');
   alert('Игра окончена')
 return
 }
     
}
guess()
}
guessNum();
console.log(randomNum);
