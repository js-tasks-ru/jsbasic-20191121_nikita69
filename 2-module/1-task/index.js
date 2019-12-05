/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  let Clone = {}; 
  for (let key in obj) {
    Clone[key] = clone(obj[key]);
  }
  return Clone;
}    

