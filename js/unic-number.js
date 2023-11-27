import { getRandomInteger } from './randome-integer';

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

export {getRandomUnicNumber};
