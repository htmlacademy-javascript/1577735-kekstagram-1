// Функция для проверки длины строки.
const text = 'Кекс - рыжий кот';
const numberOfCharacters = 20;

function checkStringLenght(string,maxLength){
  if(string.length <= maxLength){
    return true;
  }
  return false;
}

checkStringLenght(text,numberOfCharacters);

//Функция для проверки, является ли строка палиндромом.
function checkPalindrome(string) {
  string = string.toLowerCase().replaceAll(' ', ''); // добавил строку с https://dev-gang.ru/article/proverka-palindroma-javascript-kxkzwzxds9/
  let check = '';
  for (let i = string.length - 1; i >= 0; --i) {
    check += string.at(i);
  }
  return string === check;
}
checkPalindrome('Лёша на полке клопа нашёл');

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function extractNumber(string){
  if(typeof string === 'number'){
    const toString = String(string);
    return toString.replace(/[^0-9]/g, '');
  }
  let result = '';
  for (let i = 0;i < string.length;i++){
    if(!Number.isNaN(parseInt(string.at(i),10))){
      result += string.at(i);
    }
  }
  return parseInt(result,10);
}

extractNumber(1.5);

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
function myPadStart(string,minLength,pad){
  const actualPad = minLength - string.lenth;
  if(actualPad <= 0){
    return string;
  }
  const tempPad = pad.slice(0,actualPad % pad.length);
  const tempRepeat = pad.repeat(actualPad / pad.length);
  return tempPad + tempRepeat + string;
}

myPadStart('qwerty', 4, '0');
