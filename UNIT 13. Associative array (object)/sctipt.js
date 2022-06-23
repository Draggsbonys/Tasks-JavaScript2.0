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

//07 Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 ключ. Если такой ключ есть в a7 то выводить 1 в out-7, если нет - 0.
let a7 = {'one': 1, 'two': 2, 'three': 3};                  
function f7 () {                                            
  let inputKey = document.querySelector('.i-7').value;      
  for (let key in a7) {                                        
   if (inputKey === key) {                                  
      document.querySelector('.out-7').innerHTML = 1;       
      return true;                                          
    } else {                                                
      document.querySelector('.out-7').innerHTML = 0;       
    } 
  }
}
document.querySelector('.b-7').onclick = f7;                

//08 Добавьте input .i-8. При нажатии b-8 выполняете функцию f8. Функция должна выводить значение в out-8, если ключ введенный в i-8 есть в массиве, если нет - 0.
a8 = {'one': 1, 'two': 2, 'three': 3};
function f8 () {
  let inputKey = document.querySelector('.i-8').value;
  for (let key in a8) {
    console.log(inputKey);
    console.log(key);
    if (inputKey == key) {
      document.querySelector('.out-8').innerHTML = a8[key];
      return true;
    } else {
      document.querySelector('.out-8').innerHTML = 0;
    }
  }
}
document.querySelector('.b-8').onclick = f8;

//09 Добавьте input .i-9. При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 все ключи массива a9, которые содержат значение, равное значению в input.i-9. Вывод через пробел. Если значений - нет то выводить пустую строку.
a9 = {'one': 1, 'two': 2, 'three': 1, 'four': 1}; 
function f9 () {
  let block = '';
  let inputValue =+ document.querySelector('.i-9').value;
  for (let key in a9) {
    if (inputValue == a9[key]) { 
      block += `${key} `; 
      document.querySelector('.out-9').innerHTML = block;
      console.log(block); 
    } else {
      document.querySelector('.out-9').innerHTML = '<br>';
    }
  }
}
document.querySelector('.b-9').onclick = f9;
//10 Давайте напишем полезную функцию f10, которая проверяет есть ли значение в ассоциативном массиве. Фукнция должна возвращать true если есть, и false если нет. Массив и значение передавать функции в качестве параметров.
let a10 = {'one': 1, 'two': 2, 'three': 3};
function f10 (arr, value) {
  let x;
  for(key in arr) {
    if (value == arr[key]) {
      return true;
    } else {
      x = 0;
    }
  }
  if (x == 0) {
    return false;
  }
}
console.log(f10(a10, 2)); //true
