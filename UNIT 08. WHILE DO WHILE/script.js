//01 Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида: 1 2 3 4 5 6 7 8 9 ... 49 50 от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла while.
let iOne = 1;
let out1 = document.querySelector('.out-1');
function f1 () {
  while (iOne <= 50) {
  out1.innerHTML += `${iOne} `; 
  iOne++
  }
}
document.querySelector('.b-1').onclick = f1;

//02 Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида: 2 4 6 ... 122 от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла while.
let iTwo = 2;
let out2 = document.querySelector('.out-2');
function f2 () {
  while (iTwo <= 122) {
    if (iTwo % 2 == 0) {
    out2.innerHTML += `${iTwo} `; 
    }
    iTwo++
  }
}
document.querySelector('.b-2').onclick = f2;

//03 Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида: 25 24 23 22 . . 7 от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла while.
let iThree = 25;
let out3 = document.querySelector('.out-3');
function f3 () {
  while (iThree >= 7) {
    out3.innerHTML += `${iThree} `; 
    iThree--
  }
}
document.querySelector('.b-3').onclick = f3;

//04 Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида: 77_74_71_68_65_62_ ... _38_35_ от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла while.
let iFour = 77;
let out4 = document.querySelector('.out-4');
function f4 () {
  while (iFour >= 35) {
    out4.innerHTML += `${iFour}_`; 
    iFour = iFour-3;
  }
}
document.querySelector('.b-4').onclick = f4;

//05 Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида: 1_*2_**3_*4_** ... 17_* от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла while.
let iFive = 1;
let out5 = document.querySelector('.out-5');
function f5 () {
  while (iFive <= 17) {
    if (iFive % 2 == 0) {
      out5.innerHTML += `${iFive}_**`; 
    } else {
      out5.innerHTML += `${iFive}_*`; 
    }
    iFive++;
  }
}
document.querySelector('.b-5').onclick = f5;

//06 Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида: Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br. Количество строк (итераций, повторений) цикла while вводит пользователь в i-6.
//.******
//.******
//.******
let iSix = 0;
let out6 = document.querySelector('.out-6');
function f6 () {
  let input = document.querySelector('.i-6').value;
  while (iSix < parseInt(input)) {
    out6.innerHTML += `******<br>`;
    iSix++;
  }
}
document.querySelector('.b-6').onclick = f6; 

// 07