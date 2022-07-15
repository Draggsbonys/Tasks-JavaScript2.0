//01 Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1, которая при нажатии читает i-1 и добавляем его в массив. После чего выводит массив в .out-1. Поскольку мы будем выводить массив d1 неоднократно, то давайте вывод массива сделаем отдельной функцией, showArr - она подготовлена. Изучите ее - это хороший способ оптимизировать код.
const array1 = [33,'best', 66, 'best'];
function showArray (elem, arr) {
  let out = '';
  arr.forEach((item) => {
    out += `${item} `;
  });
  document.querySelector(elem).textContent = out;
}
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

//07 


