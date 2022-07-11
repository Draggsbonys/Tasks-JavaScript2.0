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
  out9[i].classList.add('bg-9');
})
}

out9.forEach((elem) => {
   elem.addEventListener('click', function f9 () {
     elem.classList.add('bg-9');
   })
})

//10 Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-10 событие клик. По клику должна выполняться функция f10. Функция, должна делать toggle класса bg-10 тому out-10 на котором кликнули.
let out10 = document.querySelectorAll('.out-10');
for(let i = 0; i < out.length; i++) {
  out9[i].addEventListener('click', function f10 () {  
  out9[i].classList.toggle('bg-10');
})
}

out10.forEach((elem) => {
   elem.addEventListener('click', function f10 () {
     elem.classList.toggle('bg-10');
   })
})

//11 Добавьте кнопку .b-11, которая запускает функцию f11. Функция создает через createElement div c текстом 25 и добавляет его через append в out-11.
function f11 () {
  let out11 = document.querySelector('.out-11');
  let div = document.createElement('div');
  div.textContent = 25;
  out11.append(div);
}
document.querySelector('.b-11').onclick = f11;

//12 Добавьте кнопку .b-12, которая запускает функцию f12. Функция создает через createElement div c текстом 12 и добавляет ему класс bg-12. Созданный div добавляется в out-12.
function f12 () {
  let out12 = document.querySelector('.out-12');
  let div = document.createElement('div');
  div.classList.add('block-12');
  div.textContent = 25;
  out12.append(div);
}
document.querySelector('.b-12').onclick = f12;

//13 Добавьте кнопку .b-13, которая запускает функцию f13. Функция создает через createElement div c текстом pushMe и добавляет ему класс bg-13. Также, созданному div добавляется событие onclick, по которому выполняется функция f13_1. Созданный div добавляется в out-13.
document.querySelector('.b-13').onclick = f13; 
function f13_1 () {
    document.querySelector('.out-13-1').innerHTML += this.innerHTML;
}
function f13 () {
  let out = document.querySelector('.out-13');
  let div = document.createElement('div'); 
  div.classList.add('bg-13');
  div.textContent = 'pushMe';
  out.append(div);
  div.onclick = f13_1;
} 

//14 Добавьте кнопку .b-14, которая запускает функцию f14. Добавьте кнопук .b14-1 которая запускает функцию f14_1 Функция f14 создает через createElement <p> c текстом 14 и добавляет ему класс p-14. Созданный  <p> добавляется в out-14 с помощью append. Функция f14_1 создает через createElement <span>. Созданный  <span> добавляется в out-14 c помощью prepend
function f14 () {
  let out = document.querySelector('.out-14');
  let p = document.createElement('p'); 
  p.classList.add('p-14');
  p.textContent = '14';
  out.append(p);
  console.log(out);
} 
function f14_1 () {
    let span = document.createElement('span');
    out.prepend(span);
    console.log(out);
}
document.querySelector('.b-14').onclick = f14;
document.querySelector('.b-14-1').onclick = f14_1;

//15 Добавьте кнопку .b-15, которая запускает функцию f15. Функция создает через createElement <p> c текстом 15 и добавляет ему класс p-15, создает через createElement <span> с текстом 15-1 и добавляет ему класс span-15. Созданный <p> добавляется в out-15 с помощью append, созданный <span> добавляется в out-15 с помощью before.
function f15 () {
  let out = document.querySelector('.out-15');
  let p = document.createElement('p'); 
  p.classList.add('p-15');
  p.textContent = '15';
  out.append(p);
  let span = document.createElement('span');
  span.classList.add('span-15');
  span.textContent = '15-1'
  p.before(span);
  console.log(out);
} 
document.querySelector('.b-15').onclick = f15;

//16 Добавьте кнопку .b-16, которая запускает функцию f16. Функция создает через createElement <p> c текстом 16 и добавляет ему класс p-16, создает через createElement <span> с текстом 16-1 и добавляет ему класс span-16. Созданный <p> добавляется в out-16 с помощью append, созданный <span> добавляется в out-16 с помощью after.
function f16 () {
  let out = document.querySelector('.out-16');
  let p = document.createElement('p'); 
  p.classList.add('p-16');
  p.textContent = '16';
  out.append(p);
  let span = document.createElement('span');
  span.classList.add('span-16');
  span.textContent = '16-1'
  p.after(span);
  console.log(out);
} 
document.querySelector('.b-16').onclick = f16;

//17 Добавьте кнопку .b-17, которая запускает функцию f17. Функция создает через createElement <p> c текстом 17 и добавляет ему класс p-17, создает через createElement <span> с текстом 17-1 и добавляет ему класс span-17. Созданный <p> добавляется в out-17 с помощью append, созданный <span> добавляется в out-17 вместо <p> с помощью replaceWith. 
function f17 () {
  let out = document.querySelector('.out-17');
  let p = document.createElement('p'); 
  p.classList.add('p-17');
  p.textContent = '17';
  out.append(p);
  let span = document.createElement('span');
  span.classList.add('span-17');
  span.textContent = '17-1'
  p.replaceWith(span);
  console.log(out);
} 
document.querySelector('.b-17').onclick = f17;

//18 Добавьте кнопку .b-18, которая запускает функцию f18. Функция с помощью getAttribute получает data-b атрибут с параграф p-18 и выводит в out-18.
function f18 () {
  let out = document.querySelector('.out-18');
  let p = document.querySelector('.p-18');
  let data = p.getAttribute('data-b');
  out.textContent = data;
}
document.querySelector('.b-18').onclick = f18;

//19 Добавьте кнопку .b-19, которая запускает функцию f19. Функция с помощью getAttribute получает data-b атрибут с параграфов p-19 и выводит в out-19 через пробел. Обратите внимание, что элементов p-19 больше одного.
function f19 () {
  const out = document.querySelector('.out-19');
  const paragraph = document.querySelectorAll('.p-19');
  paragraph.forEach((p) => {
    let data = p.getAttribute('data-b'); 
    out.textContent += `${data} `;
  })
}
document.querySelector('.b-19').onclick = f19;

//20 Добавьте кнопку .b-20, которая запускает функцию f20. Функция с помощью setAttribute присваивает атрибут title="go" в div.out-20.
function f20 () {
  let out = document.querySelector('.out-20');
  out.setAttribute('title', 'go');
  console.log(out);
}
document.querySelector('.b-20').onclick = f20;





