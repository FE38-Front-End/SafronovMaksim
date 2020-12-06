//Создание квадрата и окружности
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
const deleteSquare = document.getElementById('squareClear');
deleteSquare.addEventListener('click', () => {
    let delSquare = document.querySelectorAll('div');
    if(delSquare.length > 0){
        delSquare.parentNode.removeChild(delSquare);
    }else{
        alert('Квадрат отсутствует');
    }
});


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
//Создание интерфейса
function moveRight(){
    let left = circle.style.left;
    left = parseInt(left);
    if(left < squareWidth/2){
        left += parseInt(document.getElementById('step').value);
        circle.style.left = left +'px';
    }
}
function moveLeft(){
    let left = circle.style.left;
    left = parseInt(left);
    if(left > -squareWidth/2){
        left -= parseInt(document.getElementById('step').value);
        circle.style.left = left +'px';
    }
}
let right = document.getElementById('right');
    left = document.getElementById('left');
right.addEventListener('click',moveRight);
left.addEventListener('click',moveLeft);

function moveDown(){
    let down = circle.style.top;
    down = parseInt(down);
    if(down < squareWidth/2){
        down += parseInt(document.getElementById('step').value);
        circle.style.top = down +'px';
    }
}
function moveUp(){
    let down = circle.style.top;
    down = parseInt(down);
    if(down > -squareWidth/2){
        down -= parseInt(document.getElementById('step').value);
        circle.style.top = down +'px';
    }
}
let down = document.getElementById('down');
    up = document.getElementById('up');
down.addEventListener('click',moveDown);
up.addEventListener('click', moveUp);

