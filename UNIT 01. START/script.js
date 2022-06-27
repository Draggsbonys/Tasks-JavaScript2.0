//01 Выведите в консоль ваше имя. 
console.log('Lada'); 

//02 Выведите в консоль номер месяца в котором вы родились. Изучите чем отличается вывод числа и строки. 
console.log(8);

//03 Выведите в консоль строку: 'Добро '+'пожаловать '+' на курс'
console.log("Добро '+' пожаловать '+' на курс"); 

//04 С помощью alert выведите число 2019. После срабатывания кода - закомментируйте его, чтобы не мешал для дальнейшей разработки
alert(2019);

//05 С помощью alert выведите результат операции: 2019 - 200
alert(2019 - 200);

//06 Создайте на странице div с id=one. С помощью document.getElementById запишите в данный элемент текст 'Hello World'. 
document.getElementById('one').innerHTML = 'Hello World'; 

//07 Создайте на странице div с id=two. С помощью document.getElementById запишите в данный элемент результат умножения 12 на 12. Умножение можно сделать с помощью знака звездочки ( цифра 8). 
document.getElementById('two').innerHTML = 12*12;

//08 Создайте div с классом one. С помощью document.querySelector запишите в данный элемент текст 'Hello World'. 
document.querySelector('.one').innerHTML = 'Hello World'; 

//09 Создайте следующую верстку на странице: <h2>Hello <span>everyone</span></h2> Замените с помощью querySelector текст everyone на world.
document.querySelector('span').innerHTML = 'world';

//10 Создайте пустой div c классом three. С помощью querySelector запишите внутрь div заголовок h3 с произвольным текстом.
document.querySelector('.three').innerHTML = '<h3>Hello world</h3>';  

//11 Создайте пустой div c классом four. С помощью querySelector запишите внутрь div заголовок h4 с произвольным текстом и параграф p с произвольным текстом. Подсказка, чтобы дописывать внутрь элемента используейте не innerHTML = , а innerHTML += (плюс равно без пробела).
document.querySelector('.four').innerHTML = '<h4>Hello world</h4>';
document.querySelector('.four').innerHTML += '<p>Hello World</p>'; 

//12 Создайте div с классом five. Получите его в переменную a. С помощью innerHTML запишите внутрь переменной a число 3.1415. Изучите как в JS пишутся дроби - через точку или через запятую!
let a = document.querySelector('.five');
a.innerHTML = 3.1415;

//13 Создайте div с классом seven. Получите его в переменную div7. С помощью innerHTML запишите в него строку: <img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">
let div7 = document.querySelector('.seven');
div7.innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">';

//14 Создайте две переменных z1 = 6, z2 = 3. Создайте div, класс присвойте самостоятельно и выведите в него умножение z1 на z2.
let z1 = 6;
let z2 = 3;
document.querySelector('.one').innerHTML = z1 * z2; 

//15 Создайте две переменных y1 = 6, y2 = 3. Создайте div, класс присвойте самостоятельно, выведите в него деление y1 на y2.
let y1 = 6;
let y2 = 3;
document.querySelector('.one').innerHTML = y1 / y2; 