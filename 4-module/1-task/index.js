/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let elem = document.createElement('ul');
  elem.innerHTML = friends.map(list => `<li>${list.firstName} ${list.lastname}</li>`).join('');
  return elem;    
}
