//Функция для проверки, является ли строка палиндромом.
function checkPalindrome(string) {
  string = string.toLowerCase().replaceAll(' ', '');
  let check = '';
  for (let i = string.length - 1; i >= 0; --i) {
    check += string.at(i);
  }
  return string === check;
}

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

// Функция для проверки длины строки.

function checkStringLenght(string,maxLength){
  if(string.length <= maxLength){
    return true;
  }
  return false;
}

//Функция по поиску случайного числа
const getRandomInteger = (min,max)=>{
  if (min > max || max <= 0){
    return false;
  }else{
    const random = Math.random() * (max - min) + min;
    return Math.round(random);
  }
};

//Функция по поиску случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


//Функция по поиску случайного не повторяющегося элемента
const getRandomUnicNumber = (min,max) => {
  const unicNumber = [];
  return () =>{
    if(unicNumber.length >= max - min + 1){
      throw new Error('У вас ошибка');
    }
    let value = getRandomInteger(min,max);
    while(unicNumber.includes(value)){
      value = getRandomInteger(min,max);
    }
    unicNumber.push(value);
    return value;
  };
};

export {getRandomArrayElement,getRandomInteger,checkStringLenght,extractNumber,myPadStart,checkPalindrome,getRandomUnicNumber};

