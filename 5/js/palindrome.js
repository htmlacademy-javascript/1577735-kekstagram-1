//Функция для проверки, является ли строка палиндромом.
function checkPalindrome(string) {
  string = string.toLowerCase().replaceAll(' ', '');
  let check = '';
  for (let i = string.length - 1; i >= 0; --i) {
    check += string.at(i);
  }
  return string === check;
}
export {checkPalindrome};
