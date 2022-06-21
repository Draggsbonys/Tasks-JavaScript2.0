//01 При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение сохраненное под ключем two из массива a1. Возвратите это значение.
let a1 = { 
   'one': 15,
   'two': 16,
   'five': 20,  
 }
 function f1 () {
   document.querySelector('.out-2').innerHTML = a1.two;
   return a1.two;
 }
 document.querySelector('.b-1').onclick = f1;

//02 При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.
let a2 = { 
   'one': 'hello',
   'two': 'mahai',
   'five': 'hi',  
 }
 function f2 () {
   document.querySelector('.out-2').innerHTML = a2.five;
   return a2.five;
 }
 document.querySelector('.b-2').onclick = f2;

//03 При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение hi из массива a3. Возвратите это значение. Вывод - через пробел.
let a3 = {
   'one': 'hello',
   'two': 'mahao',
   'five': 'hi',  
 }
 function f3 () { 
   document.querySelector('.out-3').innerHTML = `${a3.five[0]} ${a3.five[1]}`;
   return a3.five
 };
 document.querySelector('.b-3').onclick = f3;
 