//01 Создайте button.b-1 - при нажатии на него выводите alert с номером задачи.
document.querySelector('.b-1').onclick = () => {
   alert(1);
}

//02 Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.
document.querySelector('.b-2').onclick = () => {
   alert(2);
}

//03 Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.
document.querySelector('.p-3').onclick = () => {
   alert(3);
}

//04 Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4
document.querySelector('.b-4').onclick = () => {
   let out = document.querySelector('.out-4');
   let ckeckbox = document.querySelector('.i-4');
   if (ckeckbox.checked) {
     out.innerHTML = 'true';
   } else {
     out.innerHTML = 'false';
   }
}

//05 Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5.
document.querySelector('.b-5').onclick = () => {
   let out = document.querySelector('.out-5');
   let checkbox = document.querySelector('.i-5');
   if (checkbox.checked) {
     out.innerHTML = checkbox.value;
   } else {     
     out.innerHTML = 'false';
   }
}

//06 Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6.
document.querySelector('.b-6').onclick = () => {
   let out = document.querySelector('.out-6');
   let checkbox = document.querySelector('.i-6').value;
   out.innerHTML = checkbox;
}

//07 Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.
document.querySelector('.b-7').onclick = () => {
   let value = document.querySelector('.i-7').value;
   let out1 = document.querySelector('.out-71');
   let out2 = document.querySelector('.out-72');
   out1.innerHTML = value;
   if (value.length >= 6) {
     out2.innerHTML = 1;
   } else {
     out2.innerHTML = 0;
   }
}

//08 Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.
document.querySelector('.b-8').onclick = () => {
   let out1 = document.querySelector('.out-8');
   let out2 = document.querySelector('.out-81');
   out1.innerHTML = '<input type="text" class="i-81">';
   out1.innerHTML += '<button class="b-81">Push</button>';
   let button = document.querySelector('.b-81'); 
   function f81 () {
     let value = document.querySelector('.i-81').value;
     out2.innerHTML = value;   
   }
   button.onclick = f81;
}

//09 Создайте один input(radio).r-9 и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен.
document.querySelector('.b-9').onclick = () => {
  let out = document.querySelector('.out-9');
  let input = document.querySelector('.r-9');
  if (input.checked) {
    out.innerHTML = input.value;
  } else {
    out.innerHTML = 0;
  }
}

//10 >Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду .style.background = ).
let out = document.querySelector('.out-10');
let button = document.querySelector('.b-10');
button.onclick = () => { 
  let input = document.querySelector('.i-10').value;
  out.style.background = input;
}

//11 Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго.
document.querySelector('.b-11').onclick = () => { 
   let input1 = document.querySelector('.i-111').value;
   let input2 = document.querySelector('.i-112');
   input2.value = input1;
}

//12 Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите на в out-12 выбранную в input дату.
document.querySelector('.b-12').onclick = () => { 
   let out = document.querySelector('.out-12');
   let input = document.querySelector('.i-12').value;
   out.innerHTML = input;
}

//13 Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.
let input = document.querySelector('.i-13');
input.oninput = () => { 
  let out = document.querySelector('.out-13');
  out.innerHTML = input.value;
}

//14 Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14.
document.querySelector('.b-14').onclick = () => {
   let value = document.querySelector('.t-14').value;
   let out = document.querySelector('.out-14');
   out.innerHTML = value;
}

//15 Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15. 
document.querySelector('.b-15').onclick = () => {
   let text = document.querySelector('.t-15');
   let input = document.querySelector('.i-15').value;
   let out = document.querySelector('.out-15');
   text.value = input;
   out.innerHTML = text.value;
}

//16 Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16. 
document.querySelector('.b-16').onclick = () => {
   let select = document.querySelector('.s-16').value;
   let out = document.querySelector('.out-16');
   out.innerHTML = select;
}

//17 Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option.
function f17 () {
   let select = document.querySelector('.s-17').value;
   let out = document.querySelector('.out-17');
   out.innerHTML = select;
}
document.querySelector('.s-17').onchange = f17;

//18 Создайте select.s-18 и input.i-18. Добавьте на select событие onchange, при наступлении которого запускается функция f18. Функция должна выводить в input i-18 value выбранного в select option.
function f18 () {
   let select = document.querySelector('.s-18').value;
   let input = document.querySelector('.i-18');
   input.value = select;
}
document.querySelector('.s-18').onchange = f18; 

//19 Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.
document.querySelector('.b-19').onclick = () => {
   let out = document.querySelector('.out-19');
   let input1 = document.querySelector('.i-191').value;
   let input2 = document.querySelector('.i-192').value;
   out.innerHTML = `${input1} ${input2}`;
}

//20 Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements 
document.querySelector('.b-20').onclick = () => {
   let out = document.querySelector('.out-20');
   let form = document.forms.my;
   let input1 = form.elements[0];   
   let input2 = form.elements[1];
   out.innerHTML = `${input1.value} ${input2.value}`;
}
 
 
 
 
 
 
 
 