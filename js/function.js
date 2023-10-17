const string = 'Кекс - рыжий кот';
const length = 20;

function stringLenght(string,length){
  if(string.length <= length){
    return true;
  }
  return false;
}

stringLenght(string,length);
