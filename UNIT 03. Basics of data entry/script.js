//01 Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
console.log(a * b); 

//02 Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
let c = 7;
let d = 9;
document.querySelector('.out').innerHTML = c / d;

//03 Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f. 
let e = 3;
let f = 5;
document.querySelector('.out').innerHTML = e + f;

//04 Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу. 
let e1= '3';
let f1= 5;
document.querySelector('.out').innerHTML = e1 + f1;

//05 Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2. 
let e2 = 3;
let f2 = 0;
document.querySelector('.out').innerHTML = e2 / f2;

//06 Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных. 
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out').innerHTML = e3 + f3;

//07 Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.
let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out').innerHTML = e4 * f4;

//08 Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
document.querySelector('.b-1').onclick = () => {
   let e = document.querySelector('.i-1').value;
   console.log(e);
}

//09 Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
document.querySelector('.b-2').onclick = () => {
   let input = document.querySelector('.i-2').value;
   document.querySelector('.out-2').innerHTML = input;
   document.querySelector('.i-2').value = '';
 }

//10 Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
 document.querySelector('.b-3').onclick = () => {
   let num = document.querySelector('.i-3').value * 10;
   document.querySelector('.out-3').innerHTML = num;
 }  

//11 Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.
document.querySelector('.b-4').onclick = () => {
   let num =+ document.querySelector('.i-4').value + 10;
   document.querySelector('.out-4').innerHTML = num;
}

//12 Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия. 
document.querySelector('.b-5').onclick = () => {
   let name = document.querySelector('.i-5').value;
   let secondName = document.querySelector('.i-6').value;
   console.log(`Hello ${name} ${secondName}`); 
}

//13 Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.
document.querySelector('.b-6').onclick = () => {
   let first =+ document.querySelector('.i-6').value;
   let second =+ document.querySelector('.i-7').value;
   document.querySelector('.out-6').innerHTML = first + second; 
}  

//14 Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'. 
document.querySelector('.i-7').value = 'Hello';

//15 Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции. 
let y = document.querySelector('.i-8');
y.style.border = "2px solid red";

//16 Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.
document.querySelector('.b-10').onclick = () => {
   let first =+ document.querySelector('.i-9').value;
   let second =+ document.querySelector('.i-10').value;
   document.querySelector('.out-10').innerHTML = (first + second);
}

//17 Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
document.querySelector('.b-11').onclick = () => {
   let t = document.querySelector('.i-11').value;
   console.log(t = parseInt(t));
}

//18 Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
document.querySelector('.b-11').onclick = () => {
   let t = document.querySelector('.i-12').value;
   console.log(t = parseFloat(t));
}

//19 Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!
document.querySelector('.b-13').onclick = () => {
   let first = document.querySelector('.i-13').value;
   let second = document.querySelector('.i-14').value;
   document.querySelector('.out-13').innerHTML = parseInt(first + second);
}

//20 Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
document.querySelector('.b-1').onclick = () => {
   let firstName = document.querySelector('.first-name').value;
   let secondName = document.querySelector('.second-name').value;
   let age =+ document.querySelector('.age').value;
   let major = document.querySelector('.major').value; 
   document.querySelector('.out').innerHTML = `Уважаемый ${firstName}, ${secondName}, ваш возраст ${age} года, по профессии вы ${major}`;
}
 

 

