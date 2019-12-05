/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let arr = data.filter(item => item.age <= age).map(el => `${el.name}, ${el.balance}`).join('\n');
  return arr;
}
