//Функция по поиску случайного числа
const getRandomInteger = (min,max)=>{
  if (min > max || max <= 0){
    return false;
  }else{
    const random = Math.random() * (max - min) + min;
    return Math.round(random);
  }
};

export {getRandomInteger};
