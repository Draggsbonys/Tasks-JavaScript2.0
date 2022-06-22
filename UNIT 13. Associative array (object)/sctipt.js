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

//04 Напишем функцию f4, которая будет выводить массив a4 в out-4 при нажатии кнопки b-4. Формат вывода - ключ пробел значение перенос строки + <br>. Функция должна возвращать строку в указанном формате вывода. 
let a4 = {'name': 'John','age': 25,'zodiac': 'leo'};
let out = '';
function f4 () {
  for (let key in a4) {
    out += `${key} ${a4[key]}<br>`;  
  }
  document.querySelector('.out-4').innerHTML = x;
  return out;
}
document.querySelector('.b-4').onclick = f4;

//05 Напишем функцию f5, которая принимает массив как параметр и выводит его в формате указанном в функции в указанный блок (как второй параметр).
function f5 (arr, block) { 
  let out = '';
  for (key in arr) {
    out += `${key} ${arr[key]} <br>`;
  }
  document.querySelector(block).innerHTML = out;
}
document.querySelector('.b-5').onclick = () => {
  f5(a4, '.out-4');
}

//06 Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6. Функция должна получать из i-61 ключ, а из i-62 значение и добавлять его в массив a6. После этого, с помощью функции f5 выводите массив a6 в out-6.
let a6 = {};
function f6 () {
  let inputKey = document.querySelector('.i-61').value;
  let inputValue = document.querySelector('.i-62').value;
  a6[inputKey] = inputValue;      
  console.log(a6);
}
document.querySelector('.b-6').onclick = f6;