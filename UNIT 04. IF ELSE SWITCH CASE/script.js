//01 При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.
function f1 () {
   let value = document.querySelector('.i-1').value;
   let out = document.querySelector('.out-1');
   if (value == 4) {
     out.innerHTML = true;
   } else {
     out.innerHTML = false;
   }
}
 document.querySelector('.b-1').onclick = f1; 

//02 Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.
function f2 (a21, a22) {
   let out = document.querySelector('.out-2');
   if (a21 > a22) {
     out.innerHTML = a21; //true
   } else {
     out.innerHTML = a22; //false 
   }
}
let button = document.querySelector('.b-2');
button.addEventListener('click', f2.bind(button, 10, 6));

//03 Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна прочитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в out-3 большее число.Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.
function f3 () {
   let num1 = document.querySelector('.i-31').value;
   let num2 = document.querySelector('.i-32').value;
   let out = document.querySelector('.out-3');
   if (num1 > num2) {
    out.innerHTML = num1;
   } else {
     out.innerHTML = num2;
   }
}
document.querySelector('.b-3').onclick = f3;

//04 Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.
function f4 () {
   let year = document.querySelector('.i-4').value;
   let out = document.querySelector('.out-4');
   if (2022 - year >= 18) { 
    out.innerHTML = 1;
   } else {
     out.innerHTML = 0;
   }
}
document.querySelector('.b-4').onclick = f4;

//05 Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.
function f5 () {
   let num = document.querySelector('.i-5').value;
   let out = document.querySelector('.out-5');
   if (num < 0) { 
    out.innerHTML = 'm';
   } else if (num == 0) {
     out.innerHTML = 0;
   } else { 
     out.innerHTML = 1;
   }
}
document.querySelector('.b-5').onclick = f5;

//06 Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в .out-6 слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю - четное, нет - нечетное.
function f6 () {
   let num = document.querySelector('.i-6').value;
   let out = document.querySelector('.out-6');
   if (num % 2 == 0) {
     out.innerHTML = 'even';
   } else {
     out.innerHTML = 'odd';
   }
}
document.querySelector('.b-6').onclick = f6;

//07 Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в out-7. Для возведения в степень можно использовать **, или Math.pow.
function f7 () {
   let num1 = document.querySelector('.i-71').value;
   let num2 = document.querySelector('.i-72').value;
   let out = document.querySelector('.out-7');
   out.innerHTML = num1 ** num2;
}
document.querySelector('.b-7').onclick = f7;

//08 Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three. 
function f8 () {
   let value = document.querySelector('.s-8').value;
   let out = document.querySelector('.out-8');
   console.log(value);
   switch (parseInt(value)) {
       case 1:  
       out.innerHTML = 'one';  
       break;
       case 2: 
       out.innerHTML = 'two';
       break;
       case 3: 
       out.innerHTML = 'three';
       break;
   };
}
document.querySelector('.b-8').onclick = f8;

//09 Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в .out-9 номер подъезда, в котором находится квартира. Eсли от 1 до 32 - то вывести цифру 1, если от 33 до 43 - то вывести 2, если от 44 до 64 - то 3., в противном случае, вывести 0.
function f9 () {
   let value = document.querySelector('.i-9').value;
   let out = document.querySelector('.out-9');
   if (value >= 1 && value <= 32) {
     out.innerHTML = 1;
   } else if (value >= 33 && value <= 43) {
     out.innerHTML = 2;
   } else if (value >= 44 && value <= 64) { 
   out.innerHTML = 3;
   } else {
   out.innerHTML = 0;
   }
}  
document.querySelector('.b-9').onclick = f9;  

//10 Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.
function f10 () {
   let value = document.querySelector('.s-100').value;
   let out = document.querySelector('.out-10');
   out.innerHTML = value; 
}  
document.querySelector('.b-10').onclick = f10;  

//11 Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11. 
function f11 () {
   let value = document.querySelector('.s-110').value;
   let out = document.querySelector('.out-11');
   out.innerHTML = value; 
 } 
 f11();

//12 Дан input i-120. По нажатию кнопки получите значение из input в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.
function f12 () {
   let value = document.querySelector('.i-12').value;
   let out = document.querySelector('.out-12');
   out.innerHTML = typeof value; 
} 
document.querySelector('b-12').onclick = f12;
//13 Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?
function f13 () {
   let value = document.querySelector('.i-13').value;
   let out = document.querySelector('.out-13');
   out.innerHTML = typeof value; 
} 
document.querySelector('.b-13').onclick = f13; 

//14 
function f14 () {
   let num1 =+ document.querySelector('.i-141').value;
   let num2 =+ document.querySelector('.i-142').value;
   let value = document.querySelector('.s-143').value;
   let out = document.querySelector('.out-14');
   if (value == '+') {
     out.innerHTML = num1 + num2;
   } else if (value == '-') {
     out.innerHTML = num1 - num2;
   } else if (value == '*') {
     out.innerHTML = num1 * num2;
   } else if (value == '/') {
     out.innerHTML = num1 / num2;
   }
} 
document.querySelector('.b-14').onclick = f14;  