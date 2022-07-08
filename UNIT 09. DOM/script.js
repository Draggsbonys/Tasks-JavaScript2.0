//01 Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает блоку .out-1 ширину 200px, высоту 40px.
let out1 = document.querySelector('.out-1');
function f1 () {
  out1.style.height = `${40}px`;
  out1.style.width = `${200}px`;
}
document.querySelector('.b-1').onclick = f1;

//02 По нажатию кнопки b-2 запускайте функцию f2, которая присваивает блоку out-2 класс .bg-2. 
let out2 = document.querySelector('.out-2');
function f2 () {
  out2.classList.add('bg-2');
  console.log(out2);
}
document.querySelector('.b-2').onclick = f2;

//03 По нажатию кнопки b-3 запускайте функцию f3, которая удаляет у блока out-3 класс .bg-3
let out3 = document.querySelector('.out-3');
function f3 () {
  out3.classList.remove('out-3');
  console.log(out3);
}
document.querySelector('.b-3').onclick = f3;

//04 По нажатию кнопки b-4 запускайте функцию f4, которая делает toggle класса bg-4 для блока out-4.
let out4 = document.querySelector('.out-4');
function f4 () {
  out4.classList.toggle('bg-4');
  console.log(out4);
}
document.querySelector('.b-4').onclick = f4;

//05 По нажатию b-5 запускайте функцию f5, которая проверяет наличие класса bg-4 у блока out-4 (да, именно bg-4 у out-4 ). Результат - true или false, выводите в out-5.
let out5 = document.querySelector('.out-4');
let out6 = document.querySelector('.out-5');
function f4 () {
  out5.classList.toggle('bg-4');
}
function f5 () {
  if (out5.classList.contains('bg-4')) {
    out5.textContent = true;
  } else {
    out6.textContent = false;
  }
}
document.querySelector('.b-4').onclick = f4;
document.querySelector('.b-5').onclick = f5;

//06 По нажатию b-6 запускайте функцию f6, которая выводит в out-6 количество параграфов с классом p-6.
let out61 = document.querySelector('.out-4');
let out71 = document.querySelector('.out-5');
function f4 () {
  out61.classList.toggle('bg-4');
  console.log(out4);
}
function f5 () {
  if (out61.classList.contains('bg-4')) {
    out71.textContent = true;
  } else {
    out71.textContent = false;
  }
}
document.querySelector('.b-4').onclick = f4;
document.querySelector('.b-5').onclick = f5;

//07 По нажатию кнопки b-7 запускайте функцию f7, которая присваивает блокам out-7 класс .bg-7. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.
function f7 () {
   let out = document.querySelectorAll('.out-7');
   for (let i = 0; i < out.length; i++) {
     out[i].classList.add('bg-7'); 
   }
 }
document.querySelector('.b-7').onclick = f7;

//08 По нажатию кнопки b-8 запускайте функцию f8, которая делает toggle блокам out-8 класс .bg-8. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.
function f8 () {
   let out8 = document.querySelectorAll('.out-8');
   for (let i = 0; i < out.length; i++) {
     out8[i].classList.toggle('bg-8'); 
   }
 }
 document.querySelector('.b-8').onclick = f8;

//09 Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-9 событие клик. По клику должна выполняться функция f9. Функция, должна добавлять класс bg-9 тому out-9 на котором кликнули.
let out9 = document.querySelectorAll('.out-9');
for(let i = 0; i < out.length; i++) {
  out9[i].addEventListener('click', function f9 () {  
  out9[i].classList.toggle('bg-9');
})
}

out9.forEach((elem) => {
   elem.addEventListener('click', function f9 () {
     elem.classList.toggle('bg-9');
   })
})

//10 