// Задача 1
// В неупорядоченном списке с 10 элементами вывести на консоль текст находящийся внутри элементов. 
// Список находится в html (список создаёте на своё усмотрение).
const abc = document.querySelector('ul');
console.log(abc);
// Задача 2
// Сформировать неупорядоченный список в js с числами от 1 до n, 
// где n вводит пользователь, 
// готовый список вывести в html
const container = document.querySelector('div');
let myArr = [];
let n = prompt('Введите n', '');
for(i=1; i <= n; i++){
    myArr.push(i)
}
container.textContent = myArr;
container.appendChild(div);
