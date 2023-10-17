const text = 'Кекс - рыжий кот';
const numberOfCharacters = 20;

function stringLenght(string,length){
  if(string.length <= length){
    return true;
  }
  return false;
}

stringLenght(text,numberOfCharacters);
