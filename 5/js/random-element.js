import { getRandomInteger } from './randome-integer';

//Функция по поиску случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export{getRandomArrayElement};
