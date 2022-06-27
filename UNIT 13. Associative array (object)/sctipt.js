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
//11 При нажатии b-11 выполняете функцию f11. Функция должна получить ключ из i-11 и удалить запись из массива a11 с таким ключем. После этого вывести массив в out-11. Для вывода используйте функцию f5.
let a11 = {'one': 1, 'two': 2, 'three': 3};
function f11 () {
  let inputKey = document.querySelector('.i-11').value;
  delete a11[inputKey];  
  f5(a11, '.out-11');
} 
function f5 (arr, block) {
  let out = '';
  for (key in arr) {
    out += `${key} ${arr[key]} <br>`
  }
  document.querySelector(block).innerHTML = out;
}
document.querySelector('.b-11').onclick = f11; 
//12 При нажатии b-12 выполняете функцию f12. Функция должна получить значение из i-12 и удалить запись из массива a12 с таким значением. После этого вывести массив в out-12. Для вывода используйте функцию f5.
let a12 = {'one': 1, 'two': 2, 'three': 3};
function f12 () {
  let inputValue = document.querySelector('.i-12').value;
  for (let key in a12) {
    if (inputValue == a12[key]){
      delete a12[key];
    }
  }
  f5(a12, '.out-12');
} 
function f5 (arr, block) {
  let out = '';
  for (key in arr) {
    out += `${key} ${arr[key]} <br>`
  }
  document.querySelector(block).innerHTML = out;
}
document.querySelector('.b-12').onclick = f12; 
//13 При нажатии b-13 выполняете функцию f13. Функция должна в out-13 выводить сумму значений массива a13 (только числа).
let a13 = {'John': 100,'Ash': 'none','Mike': 150,'Piter': 'none'};
let sum = 0;
function f13 () {
  for (let key in a13) {
    if (typeof a13[key] == 'number') {
      sum += a13[key];
    }
  }
  document.querySelector('.out-13').innerHTML = sum;
}
document.querySelector('.b-13').onclick = f13;
//14 При нажатии b-14 выполняете функцию f14. Функция должна в out-14 выводить нулевые (по индексу) элементы вложенных массивов в a14. Вывод через пробел.
let a14 = {
  'one': {'one': 1, 'two': 2, 'three': 3},
  'two': {'four': 4, 'five': 5, 'six': 6},
  'three': {'seven': 7, 'eigth': 8, 'nine': 9},  
}
function f14 () {
  let out = '';
  for (let key in a14) {
    let subObj = a14[key];
    out += `${Object.keys(subObj)[0]} ${Object.values(subObj)[0]}<br>`; 
  }
  document.querySelector('.out-14').innerHTML = out;
}
document.querySelector('.b-14').onclick = f14;
//15 При нажатии b-15 выполняете функцию f15. Функция должна в out-15 выводить элементы вложенных массивов в a15. Вывод через пробел.
a15 = {
  'one': {'one': 1, 'two': 2, 'three': 3},
  'two': {'four': 4, 'five': 5, 'six': 6},
  'three': {'seven': 7, 'eight': 8, 'nine': 9},
}
function f15 () {
  for (let key in a15) {
    let subObj = a15[key];
    for (let subKey in subObj) {
      document.querySelector('.out-15').innerHTML += `${subKey} ${subObj[subKey]} `;
    }
  }
}
document.querySelector('.b-15').onclick = f15;
//16 При нажатии b-16 выполняете функцию f16. Функция должна в out-16 выводить элементы name вложенных массивов в a16. Вывод через пробел.
a16 = {
  'one': {'name': 'John', 'two': 2, 'three': 3},
  'two': {'four': 4, 'name': 'Ann', 'six': 6},
  'three': {'seven': 7, 'eight': 8, 'name': 'Max'},
}
function f16 () {
  for (let key in a16) {
    let subObj = a16[key];
    for (let subKey in subObj) {
      if (subKey == 'name') {
        document.querySelector('.out-16').innerHTML += `${subKey} ${subObj[subKey]} `;
      }
    }
  }
}
document.querySelector('.b-16').onclick = f16;
//17 При нажатии b-17 выполняете функцию f17. Функция должна в out-17 выводить элементы name вложенных массивов в a17 для который age > 30. Вывод через пробел.
let a17 = {
  'one': {'name': 'John', 'age': 25},
  'two': {'name': 'Ann', 'age': 35},
  'three': {'name': 'Max', 'age': 15},
  'four': {'name': 'Igor', 'age': 45},
}
function f17 () {
  for (let key in a17) {
    let subObj = a17[key]; 
    if (subObj.age > 30) {
        document.querySelector('.out-17').innerHTML += `${Object.keys(subObj)[0]}: ${subObj.name}<br>`;
    }
  }
}
document.querySelector('.b-17').onclick = f17;
//18 При нажатии b-18 выполняете функцию f18. Функция должна в out-18 вывести станции метро из массива a18 той ветки, которую пользователь ввел в i-18. Вывод станций - через пробел. Если ветка не найдена выводите пустую строку.
let a18 = {
  'red': ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
  'blue': ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
  'green': ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi'],
} 
function f18 () {
  let inputKey = document.querySelector('.i-18').value; 
  for (let key in a18) {
    if (inputKey == key) {
      let out = '';
      for (let i = 0; i < a18[key].length; i++) {
        out += `${a18[key][i]} `
      }
      document.querySelector('.out-18').innerHTML = out;
      return true;
    } else {
      document.querySelector('.out-18').innerHTML = `<br>`; 
    }
  }
}
document.querySelector('.b-18').onclick = f18;
//19 При нажатии b-19 выполняете функцию f19. Функция должна в out-19 вывести цвет ветки станции которую пользователь ввел в i-19. Пользователь может вводить текст как с большой, так и с маленькой буквы. Если ветка не найдена - выводите пустую строку.
let a19 = {
  'red': ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
  'blue': ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
  'green': ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi'],
} 
function f19() {
  let value = document.querySelector('.i-19').value;
  let firstUpper = value[0].toUpperCase() + value.substr(1); 
  console.log(firstUpper);
  let out = document.querySelector('.out-19');
  for (let key in a19) {
    for (let i = 0; i < a19[key].length; i++) {
      if (a19[key][i] == firstUpper) {
        out.innerHTML = key; 
      }
    }
  }
}
document.querySelector('.b-19').onclick = f19;
//20 При нажатии b-20 выполняете функцию f20. Функция должна в out-20 вывести название станции которые содержат переход на другую ветку. Такие станции маркируются 2. Вывод через пробел.
let a20 = {
  "red": [['Akademmistechko', 1], ['Nyvky', 0], ['Universytet', 3], ['Lisova', 1]],
  "blue": [['Minska', 1], ['Obolon', 0], ['Pochaina', 2], ['Holosiivska', 0]],
  "green": [['Syrets', 1], ['Zoloti Vorota', 2], ['Klovska', 0], ['Vidubichi', 1]],
}
function f20 () {
let out = '';
for (let key in a20) {
  for (let i = 0; i < a20[key].length; i++) {
    for (let j = 1; j < a20[key][i].length; j++) {
      if (a20[key][i][1] === 2) {
        out += `${a20[key][i][0]} `;
      }
    }
  }
}
document.querySelector('.out-20').innerHTML = out;
}
document.querySelector('.b-20').onclick = f20;

