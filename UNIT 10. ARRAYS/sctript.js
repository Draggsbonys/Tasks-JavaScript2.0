//01 Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1 
const array1 = ['Lada', 17, true];
function f1 () {
  document.querySelector('.out-1').textContent = array1;
};
document.querySelector('.b-1').addEventListener('click', f1);

//02 Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2.
const array2 = ['Lada', 17, true];
function f2 () {
  let out = '';
  array2.forEach((item) => {
     out += item;         
  })
  document.querySelector('.out-2').textContent = out;
};
document.querySelector('.b-2').addEventListener('click', f2);

//03 Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
const array3 = ['Lada', 17, true];
function f3 () {
  document.querySelector('.out-3').textContent = array3.length;
};
document.querySelector('.b-3').addEventListener('click', f3);

//04 Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
const array4 = ['Lada', 17, true, 'Serega', 130, false, 'cat', 'rabbit', 2];
function f4 () {
  const out = document.querySelector('.out-4');
  out.textContent = `${array4[0]} ${array4[3]} ${array4[8]}`;
};
document.querySelector('.b-4').addEventListener('click', f4);

//05 Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
const array5 = [25, 17, 15, 38, 130, 79, 1]; 
function f5 () {
  const out = document.querySelector('.out-5');
  out.textContent = `${array5[0]+array5[2]+array5[3]}`;
};
document.querySelector('.b-5').addEventListener('click', f5);

//06 Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
const array6 = ['Lada', 'Virgo', 29, 8]; 
function f6 () {
  const out = document.querySelector('.out-6');
  array6.forEach((item) => {
    out.textContent += `${item} `;
  });
};
document.querySelector('.b-6').addEventListener('click', f6);

//07 Добавьте в массив ar7 значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
//array7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
const array7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
function f7 () {
  let out = '';
  array7.push('italy');
  array7.push('tyrkey');
  array7.push('vientnam');
  array7.forEach((item) => {
  out += `${item} `;
  })
  document.querySelector('.out-7').textContent = out;
};
document.querySelector('.b-7').addEventListener('click', f7);

//08 Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.
const array8 = ['china', 'india', 'brazil', 'japan', 'egypt'];
function f8 () {
  let out = '';
  array8.splice(3, 0, 3.14);
  array8.splice(4, 0, 17);
  array8.splice(6, 0, 5);
  array8.forEach((item) => {
    out += `${item}-`;
  })
  document.querySelector('.out-8').textContent = out;
  document.querySelector('.out-8-1').textContent = array8.length;
};
document.querySelector('.b-8').addEventListener('click', f8);

//09 Выведите последний элемент массива ar9. Вывод последнего элемента - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
const array9 = [100, 200, 300, 400, 700, 121];
function f9 () {
  let x = array9.length - 1;
  document.querySelector('.out-9').textContent = array9[x];
  console.log(array9[x]);
};
document.querySelector('.b-9').addEventListener('click', f9);

const array9 = [100, 200, 300, 400, 700, 121];
function f9 () {
  let x = array9.slice(-1);
  document.querySelector('.out-9').textContent = x;
};
document.querySelector('.b-9').addEventListener('click', f9);

//10 Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
const array10 = [100, 200, 300, 400, 700, 121];
function f10 () {
  let x = array10.length - 1; 
  document.querySelector('.out-10').textContent = `${array10[1]+array10[x]}`;
};
document.querySelector('.b-10').addEventListener('click', f10);

const array10 = [100, 200, 300, 400, 700, 121];
function f10 () {
  let x = parseInt(array10.slice(-1)); 
  document.querySelector('.out-10').textContent = `${array10[1]+x}`;
};
document.querySelector('.b-10').addEventListener('click', f10);

//11 Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) элемент массива ar11 и выводит его в out-11. Разделитель - пробел.
const array11 = [2,3,4,5,6,7];
function f11 () {
  let out = '';
  let x = array11[2]; 
  array11[2] = array11[4];
  array11[4] = x;
  array11.forEach((item) => {
    out += `${item} `;
  })
  document.querySelector('.out-11').textContent = out;
};
document.querySelector('.b-11').addEventListener('click', f11);

//12 Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива. 
const array12 = ['test', 'west', 'list', 'class', 'best'];
function f12 () {
  let out = '';
  let x = array12[0]; //2
  let z = array12.length - 1;
  array12[0] = array12[z];
  array12[z] = x;
  array12.forEach((item) => {
    out += `${item} `;
  })
  document.querySelector('.out-12').textContent = out;
};
document.querySelector('.b-12').addEventListener('click', f12);

//13 Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
const array13 = ['test', 'west', 'list', 'class', 'best'];
function f13 () {
  let out = '';
  array13.forEach((item, i) => {
    out += `${i} ${item}`;
  })
  document.querySelector('.out-13').textContent = out;
};
document.querySelector('.b-13').addEventListener('click', f13);

//14 Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел. 
const array13 = [1, 2, 3, 'hello', 66];
function f13 () {
  let out = '';
  for (let i = array13.length-1; i >= 0; i--) { 
    out += `${array13[i]} `;
  }
  document.querySelector('.out-13').textContent = out;
};
document.querySelector('.b-13').addEventListener('click', f13); 

//15 Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел. 
const aray15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
function f15 () {
  let out = '';
  array14.forEach((item) => {
    if (item > 0) {
      out += `${item} `;
    }
  })
  document.querySelector('.out-15').textContent = out;
};
document.querySelector('.b-15').addEventListener('click', f15); 

//16 Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
const array16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const array16_odd = []; //не четные
const array16_even = []; //четные
function f16 () {
   let out_odd = '';
   let out_even = ''; 
   array16.forEach((item) => {
      if (item % 2 == 0) {
        array16_even.push(item);
      } else {
        array16_odd.push(item);
      }     
   })
   array16_odd.forEach((item) => {
     out_odd += `${item} `;
   })
   array16_even.forEach((item) => {
     out_even += `${item} `;
   })  
   document.querySelector('.out-16-odd').textContent = out_odd; 
    document.querySelector('.out-16-even').textContent = out_even;
};
document.querySelector('.b-16').addEventListener('click', f16); 

//17 Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
const array17 =  [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
function f17 () {
  let out = 0; 
  array17.forEach((item) => {
    if (item > 3) {
      out += 1;
    }
    document.querySelector('.out-17').textContent = out;
  })
}
document.querySelector('.b-17').addEventListener('click', f17);

//18 Используя цикл выведите в .out-18 максимальный элемент массива ar18.
const array18 =  [15,24,13,78,21,4,45,67, 108];
function f18 () {
  let out = 0; 
  array18.forEach((item) => {
    if (item > out) {
      out = item;
    }
    document.querySelector('.out-18').textContent = out;
  })
}
document.querySelector('.b-18').addEventListener('click', f18);

//19 Выведите в .out-19 индекс минимального элемента в массиве ar19
const array19 =  [2, 15,424,313,78,241,4,45,67];
function f19 () {
  let out = array19[0]; 
  array19.forEach((item) => {
    if (item < out) {
      out = item;
    }
  });
  document.querySelector('.out-19').textContent = out;
}
document.querySelector('.b-19').addEventListener('click', f19);

const array19 =  [15,424,313,78,241,4,45,67];
function f19 () {
  let out = Math.min.apply(null, array19); 
  document.querySelector('.out-19').textContent = out;
}
document.querySelector('.b-19').addEventListener('click', f19);

//20 Выведите в .out-20 сумму элементов в массиве ar20. 
const array20 =  [4,5,6,7,8,9,10];
function f20 () {
  let out = 0; 
  array20.forEach((item) => {
     out += item;      
  });
  document.querySelector('.out-20').textContent = out;
}
document.querySelector('.b-20').addEventListener('click', f20);
