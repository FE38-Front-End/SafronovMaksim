//LESSON 4
//task 1
// Функция sequence(start, step) при вызове возвращает функцию-генератор. Каждый вызов генератора возвращает новое число в
//  числовой последовательности. start – стартовое число (по умолчанию 0). step – шаг приращения (по умолчанию 1). Пример работы:
// var generator = sequence(10, 3);
// alert(generator()); // 10
// alert(generator()); // 13
// alert(generator()); // 16

function sequence(start, step){
    startup= start + step
    return startup;
    } 
alert(sequence(7, 3));
alert(sequence(startup, 3));
alert(sequence(startup, 3));


    

//task 2
// Создайте функцию sum, которая будет возвращать сумму любого количества чисел. Вызываться функция должна вот так 
// (обратите внимание на скобки):
// x = sum(2)(5)(10);
// alert(x); // выводит 17

const sumNumber = function(a){
        return function(b){
            return function(c){
                return a+b+c;
            }
        }
    }   
x = sumNumber(122)(2)(23);
alert(x);