//01 Напишите функцию t1, которая при нажатии кнопки выводит в out-1 переменную a1.
function f1 () {
   let a1 = 8;
   let out = document.querySelector('.out-1');
   out.innerHTML = a1;
};
document.querySelector('.b-1').onclick = f1;

//02 Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок. Давайте сделаем так, чтобы функция, была более гибкой. Пусть теперь функция t2 возвращает переменную a2. Поскольку функция возвращает переменную, то имя функции со скобками (вызов функции) можно встраивать в выражения.
function f2 () {
   let a2 = 8;
   return a2;
 };
 document.querySelector('.b-2').onclick = () => {
   document.querySelector('.out-2').textContent = f2();
};

//03 Наша предыдущая функция, сильно все еще зависима от внешних переменных. Давайте сделаем ее более универсальной. Пусть функция t3 принимает 2 параметра и выводит их произведение. Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве параметра a, b. Протестируем функцию на двух примерах, с помощью кнопок b3-1 и b3-2.
function f3 (a, b) {
   return a * b;
};
 document.querySelector('.b-3-1').onclick = () => {
   document.querySelector('.out-3').textContent = f3(5, 5);
};
 document.querySelector('.b-3-2').onclick = () => {
   document.querySelector('.out-3').textContent = f3(9,7);
};

//04 Напишите функцию t4 которая принимает ваш год рождения и вычисляет ваш возраст.
function f4 (a) {
   return 2022 - a;
 };
 document.querySelector('.b-4').onclick = () => {
   document.querySelector('.out-4').textContent = f4(2004);
};

//05 Напишите функцию t5, которая принимает ваше имя в качестве параметра и возвращает строку Hello name, где name - принятое в качестве параметра имя.
function f5 (name) {
   return `Hello ${name}`;
};
document.querySelector('.b-5').onclick = () => {
  document.querySelector('.out-5').textContent = f5(`Rabbit`);
};

//06 Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра.
function f6 (min,max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
};
 document.querySelector('.b-6').onclick = () => {
   document.querySelector('.out-6').textContent = f6(1,10);
};

//07 Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x,y,z) (строка). Где x,y,z - случайные числа в диапазоне [0, 255].
function f6 (min,max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}; 
document.querySelector('.b-6').onclick = () => {
   let x = f6(0,255);
   let y = f6(0,255);
   let z = f6(0,255);
   document.querySelector('.out-6').style.backgroundColor = `rgb(${x},${y},${z})`;
};

//08 Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки. Т.е. принимает _hello_ (где знак _ символизирует пробел), а возвращает hello. Для удаления пробелов - используйте trim. 
function f8 (a) {
   return a.trim();
}
document.querySelector('.b-8').onclick = () => { 
  document.querySelector('.out-8').textContent = f8(` Hello `);
}

//09 Напишите функцию t9, которая принимает число и возвращает true, если число четное, и false если не четное. 
function f9 (num) {
   if (num % 2 == 0) {
      return true;  
   } else {
     return false;
   }
}
document.querySelector('.b-9').onclick = () => { 
  document.querySelector('.out-9').textContent = f9(2);
}

//10 Создайте функцию t10, которая принимает 2 числа и возвращает большее из них. В случае равенства - любое из чисел. 
function f10 (a, b) {
   if (a > b) {
      return a;  
   } else {
     return b;
   }
}
document.querySelector('.b-10').onclick = () => { 
  document.querySelector('.out-10').textContent = f10(5,10);
}
