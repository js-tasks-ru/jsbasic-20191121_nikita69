/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let el of table.rows) {
    if (el.cells[3].hasAttribute('data-available')) {
      let tf = el.cells[3].getAttribute('data-available');
      if (tf === 'true') {
        el.classList.add('available');
      }
      else if (tf === 'false') {
        el.classList.add('unavailable');
      }
    } 
    else {
      el.setAttribute('hidden', '');
    }
  }
  for (let el of table.rows) {
    let age = el.cells[1];
    if (parseInt(age.textContent, 10) < 18) {
      el.style.textDecoration = 'line-through';
    }
  }
  for (let el of table.rows) {
    let gndr = el.cells[2];
    if (gndr.textContent === 'm') {
      el.classList.add('male');
    }
    else if (gndr.textContent === 'f') { 
      el.classList.add('female');
    }
  }
}