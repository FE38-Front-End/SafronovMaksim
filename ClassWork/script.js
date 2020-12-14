//Создание квадрата
const addSquare = document.getElementById('squareApply');
let squareHidth;
let square;
addSquare.addEventListener('click', () => {
    if(square){
        alert('Квадрат уже создан!');
    }else{
        square = document.createElement('div');
        squareWidth = document.getElementById("squareWidth").value;
        square.style.height = squareWidth + 'px';
        square.style.width = squareWidth + 'px';
        square.style.margin = '20px';
        square.style.border = '2px double black';
        square.style.position = 'relative';
        square.style.display = 'flex';
        square.style.justifyContent = 'center';
        square.style.alignItems = 'center';
        document.body.appendChild(square);
        alert('Вы создали квадрат');
    }
});


function getValue(name) {
    return localStorage.getItem(name) || '';
}
squareWidth.addEventListener('change', () => {
    localStorage.setItem('squareWidth', squareWidth.value);
});
squareWidth = getValue('squareWidth');

//Кнопка удаления квадрата
const deleteSquare = document.getElementById('squareClear');
deleteSquare.addEventListener('click', () => {
    let delSquare = document.querySelector('div');
    if(delSquare){
        delSquare.parentNode.removeChild(delSquare);
        square = null;
    }else{
        alert('Квадрат отсутствует');
    }
});

//Создание круга
const addCircle = document.getElementById('circleApply');
let circle;
addCircle.addEventListener('click', () => {
    if(square){
        if(!circle){
            circle = document.createElement('div');
            circleWidth = document.getElementById('circleWidth').value;
            circle.style.width = circleWidth + 'px';
            circle.style.height = circleWidth + 'px';
            circle.style.borderRadius = 100 +'%';
            circle.style.border = '2px double black';
            circle.style.position = 'relative';
            circle.style.left = '0px';
            circle.style.top = '0px';
            circle.style.right = '0px';
            circle.style.bottom = '0px';
            if(parseInt(circleWidth, 10) <=  parseInt(squareWidth, 10)){
                square.appendChild(circle);
            }else{
                alert('Окружность не может быть больше квадрата, проверьте значения');
            }
        }else{
            alert('Вы уже создали круг');
        }
    }else{
        alert('Сперва создайте квадрат');
    }
})
//Кнопка удаления круга
const deleteCircle = document.getElementById('circleClear');
deleteCircle.addEventListener('click', () => {
    let delCircle = document.querySelector('div div');
    if(delCircle){
        delCircle.parentNode.removeChild(delCircle);
        circle = null;
    }else{
        alert('Круг отсутствует');
    }
});
//Создание интерфейса
let right = document.getElementById('right');
right.addEventListener('click', moveRight);
function moveRight(){
    let left = circle.style.left;
    left = parseInt(left);
    if(left < squareWidth/2-circleWidth/2){
        left += parseInt(document.getElementById('step').value);
        circle.style.left = left +'px';
    }else{
        right.disabled='true';
    }
}
left = document.getElementById('left');
left.addEventListener('click',moveLeft);
function moveLeft(){
    let left = circle.style.left;
    left = parseInt(left);
    if(left > -squareWidth/2+ circleWidth/2){
        left -= parseInt(document.getElementById('step').value);
        circle.style.left = left +'px';
    }else{
        left.disabled = 'true';
    }
}
let down = document.getElementById('down');
down.addEventListener('click',moveDown);
function moveDown(){
    let down = circle.style.top;
    down = parseInt(down);
    if(down < squareWidth/2 - circleWidth/2){
        down += parseInt(document.getElementById('step').value);
        circle.style.top = down +'px';
    }else{
        down.disabled = 'true';
    }
}
up = document.getElementById('up');
up.addEventListener('click', moveUp);
function moveUp(){
    let down = circle.style.top;
    down = parseInt(down);
    if(down > -squareWidth/2 +circleWidth/2){
        down -= parseInt(document.getElementById('step').value);
        circle.style.top = down +'px';
    }else{
        up.disabled = 'true';
    }
}

    

// let q = document.getElementById('down').disabled ='true';
