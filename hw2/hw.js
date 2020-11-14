//LESSON 2
//task 1
// Создадим массив объектов, который будет содержать данные о пользователях;
// Выведем окно prompt, в которое необходимо будет ввести фамилию пользователя;
// Написать инструкцию поиска по массиву data, с введенными в prompt данными;
// Если есть совпадение - вывести все данные этого пользователя в altert;прим:
// user name: Ashton Kutcher.
// user age: 40.
// Если совпадения не произошло вывести alert с ошибкой: 
// “No results found for your request”
//task 2
//Добавить в функционал возможность поиска пользователя без учета регистра.
const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
 ];
 const lastName = prompt('Введите фамилию пользователя');
 for(i=0; i<data.length;i++){
     if(data[i].lastName.toLocaleLowerCase === lastName.toLocaleLowerCase){
         alert(`user name: ${data[i].firstName} ${data[i].lastName}
         user age: ${data[i].age}`);
         break;
     }
     else{
         alert('No results found for your request');
     }
 }
