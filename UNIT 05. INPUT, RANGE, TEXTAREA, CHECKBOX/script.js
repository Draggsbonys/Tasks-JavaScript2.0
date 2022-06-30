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