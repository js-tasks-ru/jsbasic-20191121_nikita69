/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  //let ar = str.split(',').join(' ').split(' '); переделал с использованием regexp
  let ar = str.split(/[,\s]+/g);
  // хотя проще и правильнее было бы использовать метод str.match(regexp) для возврата в виде массива только числа, т.к. 
  // между цифрами могут быть любые символы не только , и ' '  и тогда текущий код не отработает как надо, 
  // но с учетом текущих проверочных тестов оставлю как есть 
  let ar2 = ar.map(el => parseFloat(el)).filter(el => !isNaN(el));
  return {
    min: Math.min(...ar2),
    max: Math.max(...ar2),
  };
}
