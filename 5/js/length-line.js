// Функция для проверки длины строки.

function checkStringLenght(string,maxLength){
  if(string.length <= maxLength){
    return true;
  }
  return false;
}

export {checkStringLenght};
