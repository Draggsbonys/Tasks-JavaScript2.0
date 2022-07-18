//01 Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1, которая при нажатии читает i-1 и добавляем его в массив. После чего выводит массив в .out-1. Поскольку мы будем выводить массив d1 неоднократно, то давайте вывод массива сделаем отдельной функцией, showArr - она подготовлена. Изучите ее - это хороший способ оптимизировать код.
const array1 = [33,'best', 66, 'best'];
function showArray (elem, arr) {
  let out = '';
  arr.forEach((item) => {
    out += `${item} `;
  });
  document.querySelector(elem).textContent = out;
};
function f1 () {
  let value = document.querySelector('.i-1').value;
  array1.push(value);
  showArray('.out-1', array1);
}
document.querySelector('.b-1').addEventListener('click', f1);

//02 Напишите функцию f2, которая применяет метод pop к массиву d1, а затем выводит его (showArr) в .out-2
function f2 () {
  array1.pop();
  showArray('.out-2', array1);
}
document.querySelector('.b-2').addEventListener('click', f2);

//03 Напишите функцию f3, которая применяет метод shift к массиву d1, а затем выводит его (showArr) в .out-3
function f3 () {
  array1.shift();
  showArray('.out-3', array1);
}
document.querySelector('.b-3').addEventListener('click', f3);

//04 Напишите функцию f4, которая применяет метод push к массиву d1, данные для массива берите из i-4, а затем выводит его (showArr) в .out-4
function f4 () {
  let value = document.querySelector('.i-4').value;
  array1.push(value);
  showArray('.out-4', array1);
}
document.querySelector('.b-4').addEventListener('click', f4);

//05 Напишите функцию f5, которая применяет метод unshift к массиву d1, данные для массива берите из i-5, а затем выводит его (showArr) в .out-5
function f5 () {
  let value = document.querySelector('.i-5').value;
  array1.unshift(value);
  showArray('.out-5', array1);
}
document.querySelector('.b-5').addEventListener('click', f5);

//06 Напишите функцию f6, которая эмулирует работу метода push применительно к массиву d6. Т.е. добавляет значение из i-6 как последний элемент в массив d6. Эмуляция, значит, что мы получим результат аналогичный методу push без применения его. Эмуляция заключается в присвоение значения как последнего элемента массива. Как вычислить индекс последнего элемента используя длину массива - вы знаете из предыдущего урока. Повторный запуск функции должен также приводить к добавлению элемента.
const array6 = ['test', 5, 12];
function f6 () {
  let value = document.querySelector('.i-6').value;
  let index = array6.length;
  array6[index] = value;
  showArray('.out-6', array6);
}
document.querySelector('.b-6').addEventListener('click', f6);

//07 Напишите функцию f7, которая эмулирует метод pop, т.е. удаляет последний элемент массива d7. Эмулировать - получать результат аналогичный pop, но без применения pop. Функция может быть вызвана много раз, при этом каждый раз должен удаляться последний элемент d7.
const array7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
let counter = 0;  
document.querySelector('.b-7').addEventListener('click', ()=> {
    counter += 1; 
    console.log(counter);
});
function f7() {
  showArray('.out-7', array7);
  let index = array7.length - counter;
  console.log(array7);
  array7[index] = '';
};
document.querySelector('.b-7').addEventListener('click', f7);   

//08 Напишите функцию f8, которая эмулирует работу метода unShift - добавляем значение из i-8 в начало массива d8.
const array81 = [2,'4', 12, 67, 'hello'];
const array8 = [];
function f8 () {
  const value = document.querySelector('.i-8').value;
  array8[0] = value;
  for (let i = 0; i < array81.length; i++) {
    array8[i+1] = array81[i];
  }
  for (let i = 0; i < array8.length; i++) {
    array81[i] = array8[i];
  }
  showArray('.out-8', array8);
}
document.querySelector('.b-8').onclick = f8;

//09 Напишите функцию f8, которая эмулирует работу метода shift - на примере массива d9.
const out9 = document.querySelector('.out-9');
const array9 = [100, 200, 300, 400, 700, 121];
const array91 = [];
let elem = array9[0];
function f9 () {
  out9.textContent = elem;
  for (let i = 0; i < array9.length; i++) {
    array91[i] = array9[i+1];
  }
  for (let i = 0; i < array91.length; i++) {
    array9[i] = array91[i];
  }
  elem = array9[0];
}
document.querySelector('.b-9').addEventListener('click', f9);

//10 Напишите функцию f10, которая применяет к массиву d10 метод reverse и выводит полученный массив в out-10
const array10 = [3,14,15,92,6];
function f10 () {
  array10.reverse();
  showArray('.out-10', array10)
}
document.querySelector('.b-10').addEventListener('click', f10);

//11 Напишите функцию, которая получает число из input i-11, переводит в число, и с помощью метода indexOf проверяет наличие в массиве d11. Функция выводит в out-11 -1 если такого числа нет в массиве, либо его индекс в массиве.
const array11 = [2,3,4,5,6,7];
const out11 = document.querySelector('.out-11');
function f11 () {
  let value = document.querySelector('.i-11').value;
  out11.textContent = array11.indexOf(parseInt(value));
}
document.querySelector('.b-11').addEventListener('click', f11);



//12 Напишите функцию f12, которая эмулирует работу метода indexOf - ищет введенное число в массиве d12 (перебором). Если числа нет - выводит -1, если есть - его позицию в массиве. 
const array12 = [2,3,4,5,6,7];
const out = document.querySelector('.out-12');
function f12 () {
  let value = document.querySelector('.i-12').value;
  for (let i = 0; i < array12.length; i++) {
    if (value == array12[i]) {
      out.textContent = i;
      return;
    } else {
    out.textContent = '-1';
    }  
  }
}
document.querySelector('.b-12').addEventListener('click', f12);

