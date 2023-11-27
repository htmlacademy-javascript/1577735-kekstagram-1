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

export {myPadStart};
