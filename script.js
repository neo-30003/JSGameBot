"use strict";
const playRound = () => {
  const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  };
  const getNumber = () => Math.ceil(Math.random() * 100);
  let firstNumber = getNumber();
  const end = () => {
    alert("Game Over");
  };
  let attempts = 10;
  const start = () => {
    let secondNumber = +prompt("Угадайте число от 1 до 100");
    if (secondNumber === 0) {
      end();
    } else {
      if (attempts === 1 && firstNumber !== secondNumber) {
        let choice = confirm(
          "Не угадали... Запас попыток иссяк, хотите сыграть еще?"
        );
        if (choice) {
          firstNumber = getNumber();
          console.log(firstNumber);
          attempts = 10;
          start();
        } else {
          end();
        }
      } else {
        if (!isNumber(secondNumber)) {
          alert("Введи число!");
          start();
        } else if (secondNumber === null) {
          end();
        } else if (firstNumber === secondNumber) {
          let result = confirm(
            '"Поздравляю, Вы угадали!!! Не желаете сыграть еще?'
          );

          if (result) {
            firstNumber = getNumber();
            console.log(firstNumber);
            attempts = 10;
            start();
          } else {
            end();
          }
        } else if (firstNumber < secondNumber) {
          attempts--;
          alert("Загаданное число меньше осталось " + attempts + " попыток ");
          start();
        } else if (firstNumber > secondNumber) {
          attempts--;
          alert("Загаданное число больше осталось " + attempts + " попыток ");
          start();
        }
      }
    }
  };
  start();
};
playRound();
