import { getRandomInteger } from './randome-integer';
import { getRandomUnicNumber } from './unic-number';
import { getRandomArrayElement } from './random-element';

// Набор имён для комментаторов
const names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

//Набор комментариев
const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//Массив чисел для ID
const numbers = [];
for(let i = 1;i <= 25;i++){
  numbers.push(i);
}


//Создаёт комментарий
const getComment = ()=>{
  const getId = getRandomUnicNumber(0,1000);
  return{
    id:getId(),
    avatar:`img/avatar-${getRandomInteger(1,6)}.svg`,
    message:getRandomArrayElement(message),
    name:getRandomArrayElement(names)
  };

};

//Создаёт один элемент массива
const unicId = getRandomUnicNumber(1,25);
const getPost = ()=>{
  const unicNumber = unicId();
  return{
    id:unicNumber,
    url:`photos/${unicNumber}.jpg`,
    description:'описание фотографии',
    likes:getRandomInteger(15,200),
    comments:getComment()
  };
};

// Создаёт 25 постов
const numberOfPosts = 25;
const createArrayPosts = ()=>Array.from({length:numberOfPosts},getPost);

export{createArrayPosts};
