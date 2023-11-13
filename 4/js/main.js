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

//Функция по поиску случайного числа
const getRandomInteger = (min,max)=>{
  if (min > max || max <= 0){
    return false;
  }else{
    const random = Math.random() * (max - min) + min;
    return Math.round(random);
  }
};

//Функция по поиску случайного не повторяющегося элемента
const getRandomNumber = (elements) => elements.splice(Math.random() * elements.length, 1)[0];

//Массив для ID комментария
const commentIDs = [];
for(let i = 0;i < 1000;i++){
  commentIDs.push(i);
}

//Функция по поиску случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//Создаёт комментарий
const getComment = ()=>({
  id:getRandomNumber(commentIDs),
  avatar:`img/avatar-${getRandomInteger(1,6)}.svg`,
  message:getRandomArrayElement(message),
  name:getRandomArrayElement(names)
});

//Создаёт один элемент массива
const getPost = ()=>({
  id:getRandomNumber(numbers),
  url:`photos/${getRandomNumber(numbers)}.jpg`,
  description:'описание фотографии',
  likes:getRandomInteger(15,200),
  comments:getComment
});

// Создаёт 25 постов
const getManyPosts = ()=>Array.from({length:25},getPost);

getManyPosts();
