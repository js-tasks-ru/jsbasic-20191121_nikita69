/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let result = m ** n;
  return result;
}
m = +prompt('Введите число которое необходимо возвести в степень');
n = +prompt('Введите степень числа');
if (parseInt(n) != n) {
  alert('Степень числа должна быть целым числом!');
} else { 
  alert(pow(m, n));
}
