let screen = document.querySelector('.screen');
let clear = document.querySelector('.clear');
let operations = document.querySelectorAll('.operation');
let numbers = document.querySelectorAll('.number');
let decimal = document.querySelectorAll('.decimal');
let equal = document.querySelectorAll('.equal');

//обработчик событий и функция на нажатие кнопок с цифрами
for(let i = 0; i < numbers.length; i++){
  let number = numbers[i];
  number.addEventListener('click',function(e){
    numberPress(e.target.textContent);
  })

}
function numberPress(number) {
  if (screen.textContent === "0") {
    screen.textContent = number;
  } else {
    screen.textContent += number;
  }
}
//обработчик событий и функция на нажатие кнопки знака точки
for(let i = 0; i < decimal.length; i++){
  let decimals = decimal[i];
  decimals.addEventListener('click',function(e){
    decimalPress(e.target.textContent);
  })

}
function decimalPress(decimals){
  let last = screen.textContent.slice(-1);
  if(screen.textContent != 0 && last !=decimals){
    screen.textContent += decimals;
  }else if(screen.textContent = '0'){
    screen.textContent += '.';
  }else if(last = decimals){

  }
}
//обработчик событий и функция на нажатие кнопок с операциями
for(let i = 0; i < operations.length; i++){
  let sign = operations[i];
  sign.addEventListener('click',function(e){
    operationPress(e.target.textContent);
  })
}
function replace () {
  for (let i = 0; i < screen.textContent.length;  i++) {
      if ((screen.textContent[i] == '×') || (screen.textContent[i] == '÷')) {
          screen.textContent = screen.textContent.replace ('×','*');
          screen.textContent = screen.textContent.replace ('÷','/');
      }
  }
};
function operationPress(sign){
  let last = screen.textContent.slice(-1);
  if(screen.textContent != 0 && last !=sign){
    screen.textContent += sign;
  }
}
//обработчик событий и функция на нажатие кнопки очистки
clear.addEventListener('click',function(e){
  clearPress();
})
function clearPress(){
  screen.textContent = '0';
}

//обработчик событий и функция на нажатие кнопки равно
for(let i = 0; i < equal.length; i++){
  let equally = equal[i];
  equally.addEventListener('click',function(e){
    replace();
    result(e.target.textContent);
  })
}

function result() {
  screen.textContent = eval(screen.textContent);
}














