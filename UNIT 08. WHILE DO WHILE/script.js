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

//07 Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт). По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно. Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим: 4 3 2 1 0 Задача решается с помощью цикла while. 
let out = document.querySelector('.out-7');
function f7 () {
  let value = document.querySelector('.i-7').value;
  let i = value;
  while(i >= 0) {
  out.textContent += `${i} `; 
  i--;
  }
}
document.querySelector('.b-7').onclick = f7;

//08 Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт). Считаем, что второе число всегда больше первого. По нажатию кнопки b-8 должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим: 4 5 6 7 8 Задача решается с помощью цикла while.
let out = document.querySelector('.out-8');
function f8 () {
  let num1 = document.querySelector('.i-81').value;
  let num2 = document.querySelector('.i-82').value;
  let i = num1;
  while(i >= num2) {
  out.textContent += `${i} `; 
  i--;
  }
}
document.querySelector('.b-8').onclick = f8;

//09 Есть input i-91 и i-92 куда пользователь может ввести числа. По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим: 4 5 6 7 8 если ввел 8 и 6, то получим 6 7 8 Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл while.
let out = document.querySelector('.out-9');
function f9 () {
  let num1 = document.querySelector('.i-91').value;
  let num2 = document.querySelector('.i-92').value;
  let i = num1;
  while(i <= num2) {
  out.textContent += `${i} `; 
  i++;
  }
}
document.querySelector('.b-9').onclick = f9;

//10 Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно. Разделитель - пробел. Задача решается через цикл while, а четность - через шаг (равный 2).
let out = document.querySelector('.out-10');
function f10 () {
  let i = 1950;
  while(i <= 2000) {
  out.textContent += `${i} `; 
  i = i + 2;
  }
}
document.querySelector('.b-10').onclick = f10;

//11 Кнопка b-11 запускает функцию t11. Функция должна: получить все div.div-11 перебрать их с помощью цикла while. Обращение к div выглядит так elem[i] вывести в out-11 содержимое каждого блока. Разделитель - пробел. В результате должно получиться так: one 3 4 two
let out = document.querySelector('.out-11');
function f11 () {
  let i = 0;
  let div = document.querySelectorAll('.div-11');
  while(i <= div.length) { 
  out.textContent += div[i].textContent; 
  i++;
  }
}
document.querySelector('.b-11').onclick = f11;

//12 Кнопка b-12 запускает функцию t12. Функция должна: получить все div.div-12 перебрать их с помощью цикла while. Обращение к div выглядит так elem[i] применить к каждому elem[i].style.background = ‘orange’ 
let out = document.querySelector('.out-12');
function f12 () {
  let i = 0;
  let div = document.querySelectorAll('.div-12');
  while(i < div.length) { 
  div[i].style.backgroundColor = 'orange';  
  i++;
  }
}
document.querySelector('.b-12').onclick = f12;

//13 Кнопка b-13 запускает функцию t13. Функция должна: получить все input.i-13 перебрать их с помощью цикла while. Обращение к элементу выглядит так elem[i] применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3... let out = document.querySelector('.out-13');
function f13 () {
  let i = 0;
  let value = document.querySelectorAll('.i-13');
  while(i < value.length) { 
  value[i].value = i+1;  
  i++;
  }
}
document.querySelector('.b-13').onclick = f13;

//14 Кнопка b-14 запускает функцию t14 Функция должна: получить все input.i-14 перебрать их с помощью цикла while. Обращение к элементу выглядит так elem[i] вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
function f14 () {
  let i = 0;
  let out = document.querySelector('.out-14');
  let value = document.querySelectorAll('.i-14');
  while(i < value.length) { 
  if (value[i].checked) {
    out.textContent = value[i].value;
  }  
  i++;
  }
}
document.querySelector('.b-14').onclick = f14;

//15 Кнопка b-15 запускает функцию t15 Функция должна выводить следующую последовательность в out-15: 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10 Для вывода использовать цикл while.
function f15 () {
  let i = 0;
  let out = document.querySelector('.out-15');
  while(i <= 10) { 
  out.textContent += `${10 - i} ${i} `;
  i++;
  }
}
document.querySelector('.b-15').onclick = f15;

