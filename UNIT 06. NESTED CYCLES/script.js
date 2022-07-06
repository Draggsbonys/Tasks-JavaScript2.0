//01 С помощью вложенных циклов, нарисуйте строку: ***_***_***_
function f1() {
  let out = document.querySelector('.out-1');
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      out.innerHTML += '*';
    }
    out.innerHTML += '_';
  }
}

//02 С помощью вложенных циклов, нарисуйте строку: 
//1 *_*_*_
//2 *_*_*_
//3 *_*_*_
function f2() {
  let out = document.querySelector('.out-2');
  for (let i = 1; i < 4; i++) {
    out.innerHTML += `${i}<br>`;
    for (let j = 0; j < 1; j++) {
      out.innerHTML += '*_*_*_<br>';
    }
  }
}

//03 С помощью вложенных циклов, нарисуйте строку: *_*_*_ *_*_*_ *_*_*_ *_*_*_
function f3() {
  let out = document.querySelector('.out-3');
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      out.innerHTML += '*_';
    }
    out.innerHTML += '<br>';
  }
}

//04 С помощью вложенных циклов, нарисуйте строку: 
//1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
function f4() {
  let out = document.querySelector('.out-4');
  for (let i = 1; i < 4; i++) {
    out.innerHTML += `${i}_`;
    for (let j = 1; j < 6; j++) {
      out.innerHTML += `${j} `;
    }
  }
}

//05 С помощью вложенных циклов, нарисуйте строку: 
//101010
//101010
//101010
function f5() {
  let out = document.querySelector('.out-5');
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 6; j++) {
      if (j % 2 == 0) {
        out.innerHTML += 1;
      } else {
        out.innerHTML += 0;
      }
    }
    out.innerHTML += '<br>';
  }
}

//06 С помощью вложенных циклов, нарисуйте строку: 
//10x01x
//10x01x
//10x01x
function f6() {
  let out = document.querySelector('.out-6');
  for (let i = 0; i < 3; i++) {
    for (let j = 1; j <= 6; j++) {
      if (j % 3 == 0) {
        out.innerHTML += 'x';
      } else if (j % 2 == 0) {
        out.innerHTML += 0;
      } else {
        out.innerHTML += 1;
      }
    }
    out.innerHTML += '<br>';
  }
}

//07 Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.
//.*
//.**
//.***
//.****
function f7() {
  let out = document.querySelector('.out-7');
  for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < i; j++) {
      out.innerHTML += '*';
    }
    out.innerHTML += '<br>';
  }
}

//08 С помощью вложенных циклов, нарисуйте строку: 
//.*****
//.****
//.***
//.**
//.*
//Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки.
function f8() {
  let out = document.querySelector('.out-8');
  for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
      out.innerHTML += `*`;
    }
    out.innerHTML += `<br>`;
  }
}

//09 С помощью вложенных циклов, нарисуйте строку: 
//1 
//1 2 
//1 2 3 
//1 2 3 4 
//1 2 3 4 5 
//Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры
function f9() {
  let out = document.querySelector('.out-9');
  for (let i = 2; i < 7; i++) {
    for (let j = 1; j < i; j++) {
      out.innerHTML += `${j} `;
    }
    out.innerHTML += `<br>`;
  }
}

//10 С помощью вложенных циклов, нарисуйте строку:
//01 02 03 04 05 06 07 08 09 10
//11 12 13 14 15 16 17 18 19 20
//21 22 23 24 25 26 27 28 29 30
//31 32 33 34 35 36 37 38 39 40
//41 42 43 44 45 46 47 48 49 50
//Внешний цикл выводит перенос строки br и запускается от 0 до 6.
//Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.

function f10() {
  let out = document.querySelector('.out-10');
  for (let i = 0; i <= 4; i++) {
    for (let j = 1; j <= 10; j++) {
      if (j == 10) {
        out.innerHTML += (i + 1) * 10;
      } else {
        out.innerHTML += `${i}${j} `;
      }
    }
    out.innerHTML += `<br>`;
  }
}

//11 Используя вложенные циклы создайте таблицу умножения от 1 до 10. Т.е. вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее. Оформить в виде столбцов где выводятся множители и результат.
let out = document.querySelector('.out-11');
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    out.innerHTML += `${i} * ${j} = ${i * j}<br>`;
  }
  out.innerHTML += `<br>`;
}

//12 С помощью вложенных циклов и символа * нарисуйте:
//.   *****
//.  *****
//. *****
function f12() {
  let out = document.querySelector('.out-12');
  for (let i = 3; i > 0; i--) {
    for (let j = 0; j < 8; j++) {
      if (j < i || j > i + 4) {
        out.innerHTML += '&nbsp';
      } else {
        out.innerHTML += '*';
      }
    }
    out.innerHTML += `<br>`;
  }
}

//13 С помощью вложенных циклов и символа * нарисуйте:
//.*
//.**
//.***
//.**
//.*
function f13() {
  let num = 4;
  let out = document.querySelector('.out-13');
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      if (j > i || j > num) {
        out.innerHTML += '&nbsp';
      } else {
        out.innerHTML += '*';
      }
    }
    out.innerHTML += `<br>`;
    num--
  }
}

//14 С помощью вложенных циклов и символа * нарисуйте:
//.******
//.*    *
//.*    *
//.*    *
//.******
function f14() {
  let out = document.querySelector('.out-14');
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 6; j++) {
      if (i > 0 && i < 4 && j > 0 && j < 5) {
        out.innerHTML += '&nbsp&nbsp';
      } else {
        out.innerHTML += '*';
      }
    }
    out.innerHTML += `<br>`;
  }
}

//15 С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//5 4 3 2 1
//4 3 2 1
//3 2 1
//2 1
//1
function f15() {
  let num = 4;
  let out = document.querySelector('.out-15');
  for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
      out.innerHTML += `${j} `;
    }
    out.innerHTML += `<br>`;
  }
}

//16 С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//1
//2 1
//3 2 1
//4 3 2 1
//5 4 3 2 1
function f16() {
  let out = document.querySelector('.out-16');
  for (let i = 1; i < 6; i++) {
    for (let j = 5; j > 0; j--) {
      if (j <= i) {
        out.innerHTML += `${j} `;
      } else {
        out.innerHTML += `&nbsp&nbsp&nbsp`;
      }
    }
    out.innerHTML += `<br>`;
  }
}

//17 С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//X X X X 1
//X X X 2 1
//X X 3 2 1
//X 4 3 2 1
//5 4 3 2 1 
function f17() {
  let out = document.querySelector('.out-17');
  for (let i = 1; i < 6; i++) {
    for (let j = 5; j > 0; j--) {
      if (j <= i) {
        out.innerHTML += `${j} &nbsp`;
      } else {
        out.innerHTML += `X `;
      }
    }
    out.innerHTML += `<br>`;
  }
}

//18 С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//  1
//  2  2
//  3  3  3
//  4  4  4  4
//  5  5  5  5  5
function f18() {
  let out = document.querySelector('.out-18');
  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
      out.innerHTML += `${i} `;
    }
    out.innerHTML += `<br>`;
  }
}

//19 С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла (четные заменены на X):
//  5
//  X  X
//  3  3  3
//  X  X  X  X
//  1  1  1  1  1
function f19() {
  let out = document.querySelector('.out-19');
  for (let i = 5; i > 0; i--) {
    for (let j = 6; j > i; j--) {
      if (i % 2 == 0) {
        out.innerHTML += `X `;
      } else {
        out.innerHTML += `${i} &nbsp`;
      }
    }
    out.innerHTML += `<br>`;
  }
}

//20 С помощью вложенных циклов и символа * нарисуйте:
//.   *****
//.  *******
//. *********
function f20() {
  let out = document.querySelector('.out-20');
  for (let i = 3; i > 0; i--) {
    for (let j = 0; j < 9; j++) {
      if (j > i) {
        out.innerHTML += `*`;
      } else {
        out.innerHTML += `&nbsp`;
      }
    }
    out.innerHTML += `<br>`;
  }
}

//21 С помощью вложенных циклов и символа * нарисуйте:
//.*****
//. ****
//.  ***
//. ****
//.*****
function f20() {
  let num = 4;
  let out = document.querySelector('.out-20');
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 6; j++) {
      if (j > i || j > num) {
        out.innerHTML += `*`;
      } else {
        out.innerHTML += `&nbsp`;
      }
    }
    num--;
    out.innerHTML += `<br>`;
  }
}
//22 С помощью вложенных циклов и символа * нарисуйте:
//.  **
//. ****
//.******
//. ****
//.  **
function f13() {
  let out = document.querySelector('.out-13');
  let x = 2;
  let y = 3;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 6; j++) {
      if (j < x || j > y) {
        out.innerHTML += '&nbsp&nbsp';
      } else {
        out.innerHTML += '*';
      }
    }
    if (i > 1) {
      x++;
      y--;
    } else {
      x--;
      y++;
    }
    out.innerHTML += '<br>';
  }
}