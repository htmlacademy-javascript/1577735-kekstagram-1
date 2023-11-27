import { getRandomInteger } from './utils';
import { getRandomUnicNumber } from './utils';
import { getRandomArrayElement } from './utils';

// Набор имён для комментаторов
const NAMES = [
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
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


//Создаёт комментарий
const idComment = getRandomUnicNumber(0,1000);
const getComment = ()=>{
  const getId = idComment();
  return{
    id:getId(),
    avatar:`img/avatar-${getRandomInteger(1,6)}.svg`,
    message:getRandomArrayElement(MESSAGE),
    name:getRandomArrayElement(NAMES)
  };

};

//Создаёт один элемент массива
const idPost = getRandomUnicNumber(1,25);
const getPost = ()=>{
  const unicNumber = idPost();
  return{
    id:idPost(),
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
