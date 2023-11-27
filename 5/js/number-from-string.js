//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function extractNumber(string){
  if(typeof string === 'number'){
    const toString = String(string);
    return toString.replace(/[^0-9]/g, '');
  }
  let result = '';
  for (let i = 0;i < string.length;i++){
    if(!Number.isNaN(parseInt(string.at(i),10))){
      result += string.at(i);
    }
  }
  return parseInt(result,10);
}

export {extractNumber};
