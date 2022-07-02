//01 Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида: 1 2 3 4 5 6 7 8 9 ... 49 50 от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.
function f1 () {
   let out = document.querySelector('.out-1');
   for (let i = 1; i < 51; i++) {
     out.innerHTML += `${i} `;
   } 
}
document.querySelector('.b-1').onclick = f1;

//02 Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида: 2 4 6 ... 122 от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.
function f2 () {
   let out = document.querySelector('.out-2');
   for (let i = 2; i < 123; i++) { 
     if (i % 2 == 0) {
       out.innerHTML += `${i} `;
     }
   } 
}
document.querySelector('.b-2').onclick = f2;

//03 Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида: 25 24 23 22 . . 7 от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.
function f3 () {
   let out = document.querySelector('.out-3');
   for (let i = 25; i > 6; i--) {
     out.innerHTML += `${i} `;
   }
}
document.querySelector('.b-3').onclick = f3;

//04 Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида: 77_74_71_68_65_62_ ... _38_35_ от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.
function f4 () {
   let out = document.querySelector('.out-4');
   for (let i = 77; i > 34; i = i-3) {
     out.innerHTML += `${i}_`;
   }
}
document.querySelector('.b-4').onclick = f4;

//05 Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида: 1_*2_**3_*4_** ... 17_* от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.
function f5 () {
   let out = document.querySelector('.out-5');
   for (let i = 1; i < 18; i++) {
     if (i % 2 == 0) {
       out.innerHTML += `${i}_**`;
     } else {
       out.innerHTML += `${i}_*`;
     }
   }
}
document.querySelector('.b-5').onclick = f5;

//06 Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида: ****** ****** ****** Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
function f6 () {
   let out = '';
   let value = document.querySelector('.i-6').value;
   let block = document.querySelector('.out-6');
   for (let i = 0; i < value; i++) {
     out += `******<br>`;
     block.innerHTML = out;
   }
}
document.querySelector('.b-6').onclick = f6;

//07 Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт). По нажатию кнопки b-7 должна запускаться функция t7, которая выводит в out-7 числа от введенного пользователем до нуля включительно. Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим: 4 3 2 1 0 Задача решается с помощью цикла.
function f7 () {
   let value = document.querySelector('.i-7').value;
   let out = document.querySelector('.out-7');
   for (let i = value; i >= 0; i--) {
     out.innerHTML += `${i} `;
   }
}
document.querySelector('.b-7').onclick = f7;

//08 Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт). Считаем, что второе число всегда больше первого. По нажатию кнопки b-8 должна запускаться функция t8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим: 4 5 6 7 8 Задача решается с помощью цикла.
function f8 () {
   let out = '';
   let num1 = document.querySelector('.i-81').value;
   let num2 = document.querySelector('.i-82').value;
   let block = document.querySelector('.out-8');
   for (let i = num1; i <= num2; i++) {
     out += `${i} `;
     block.innerHTML = out; 
   }
}
document.querySelector('.b-8').onclick = f8; 

//09 Есть input i-91 и i-92 куда пользователь может ввести числа. По нажатию кнопки b-9 должна запускаться функция t9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим: 4 5 6 7 8 если ввел 8 и 6, то получим 6 7 8 Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
function f9 () {
   let out = '';
   let num1 = document.querySelector('.i-91').value;
   let num2 = document.querySelector('.i-92').value;
   let block = document.querySelector('.out-9');
   if (num1 < num2) {
     for (let i = num1; i <= num2; i++) {
       out += `${i} `;
     } 
   } else { 
       for (let i = num2; i <= num1; i++) {
         out += `${i} `;
     }
   }
   block.innerHTML = out;
}
document.querySelector('.b-9').onclick = f9; 

//10 Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно. Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).
function f10 () {
   let out = '';
   let block = document.querySelector('.out-10');
   for (let i = 1950; i <= 2000; i = i+2) {
     out += `${i} `;
   }
   block.innerHTML = out;
}
document.querySelector('.b-10').onclick = f10; 

//11 Кнопка b-11 запускает функцию t11. Функция должна: получить все div.div-11 перебрать их с помощью цикла. Обращение к div выглядит так elem[i] вывести в out-11 содержимое каждого блока. Разделитель - пробел. В результате должно получиться так: one 3 4 two 
function f11 () {
   let out = '';
   let block = document.querySelector('.out-11');
   let div = document.querySelectorAll('.div-11');
   for (let i = 0; i < div.length; i++) {
     out += `${div[i].textContent} `;
   }
   block.innerHTML = out;
}
document.querySelector('.b-11').onclick = f11; 

//12 Кнопка b-12 запускает функцию t12. Функция должна: получить все div.div-12 перебрать их с помощью цикла. Обращение к div выглядит так elem[i] применить к каждому elem[i].style.background = ‘orange’
function f12 () {
   let out = '';
   let div = document.querySelectorAll('.div-12');
   for (let i = 0; i < div.length; i++) {
     div[i].style.background = 'orange';
   }
}
document.querySelector('.b-12').onclick = f12; 

//13 Кнопка b-13 запускает функцию t13. Функция должна: получить все input.i-13 перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i] применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
function f13 () {
   let out = '';
   let input = document.querySelectorAll('.i-13');
   for (let i = 0; i <= 3; i++) {
     input[i].value = i+1;
   }
}
document.querySelector('.b-13').onclick = f13;  

//14 Кнопка b-14 запускает функцию t14 Функция должна: получить все input.i-14 перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i] вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
function f14 () {
   let out = document.querySelector('.out-14');
   let input = document.querySelectorAll('.i-14');
   for (let i = 0; i < input.length; i++) {
     if (input[i].checked) {
     out.innerHTML = input[i].value;
     console.log(input[i]);
     }
   }
}
document.querySelector('.b-14').onclick = f14;  

//15 