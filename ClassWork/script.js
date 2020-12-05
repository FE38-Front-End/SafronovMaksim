const addUl = document.getElementsByClassName('button--one')[0];
let newUl;
addUl.addEventListener('click', () => {
    if(newUl){
        alert('Вы уже создали список!')
    }else{
        newUl = document.createElement('ul');
        document.body.appendChild(newUl);
    }
});
    
const addLi = document.getElementsByClassName('button--two')[0]; 
let newLi;
addLi.addEventListener('click', () => {
    if(!newUl){
        alert('Сперва создайте список');
    }else{
        newLi = document.createElement('li');
        newLi.innerHTML = new Date().toLocaleString();
        newUl.appendChild(newLi);
    }
});

const deleteLi = document.getElementsByClassName('button--three')[0];
deleteLi.addEventListener('click', () => {
    const newLi = document.querySelectorAll('li');
    if(newLi.length === 0){
        alert('В списке нету элементов');
    }else{
        newUl.removeChild(newUl.lastChild);
    }
});




 


// Добавить на страницу 3 кнопки
// 1 добавляет список на страницу (ul)
// 2 добавляет элемент списка (li) с временем нажатия на кнопку
// 3 удаляет последний элемент из списка
// предусмотреть защиту от дурака
// все действия производим в js (кроме добавления кнопок)