//LESSON 3
//task 1
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {  John: 100,  Ann: 160,  Pete: 130 }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
        
let salaries = {  John: 100,  Ann: 160,  Pete: 130 };
let sum = 0;
    for (let property in salaries) {
        sum += salaries[property];
    }
console.log(sum);

//task 2
// Многоквартирный дом характеризуется следующими тремя показателями: этажность (1-25), число подъездов (1-10),
// количество квартир на лестничной площадке (1-20). Скрипт запрашивает эти показатели и номер квартиры. 
// Выводится номер подъезда и этажа, в котором находится указанная квартира..

let floor = prompt('Введите кол-во этажей вашего дома');
let entrance = prompt('Введите кол-во подъездов');
let n = prompt('Введите кол-во кв на лестничкой плащадке');
let number = prompt('Введите номер квартиры');

let sum = n*floor*entrance;//Вычисляем кол-во квартир в доме
alert(`В вашем доме ${sum} квартир`);
let numberEntrance = sum/entrance;//Вычисляем кол-во квартир в подъезде
let yourEntrance = number/numberEntrance;//Вычисляем номер подъезда, округляя число до целого
yourEntrance = Math.ceil(yourEntrance);
    if(yourEntrance > entrance)//Условие кол-ва подъездов
    {
        alert('В вашем доме нету такого подъезда');
    }
    else{
        alert(`У вас ${yourEntrance} подъезд`);
    }
let yourFloor =  (number/n)-((yourEntrance-1)*floor);//Вычисляем этаж пользователя
yourFloor = Math.ceil(yourFloor);
alert(`У вас ${yourFloor} этаж`);