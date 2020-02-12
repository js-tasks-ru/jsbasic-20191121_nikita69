/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');

  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');

  this.el.prepend(thead);
  this.el.append(tbody);

  let newitems = Object.assign([], items);

  thead.innerHTML = newitems.slice(0, 1)
   .map((item) => {
     let newrow = '';
     for (let newkey in item) {
       newkey = newkey.replace(/^\w/, c => c.toUpperCase());
       newrow += `<td>${newkey}</td>`;
     }
     return `<tr>${newrow}</tr>`;
   }).join('');
  function tBody() {
    tbody.innerHTML = items.map((item) => {
      let row = '';
      for (let key in item) {
        row += `<td>${item[key]}</td>`;
      }
      return `<tr>${row}</tr>`;
    }).join('');
  }
  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    items = items.sort((a, b) => { 
      let rowA = Object.values(a)[column];
      let rowB = Object.values(b)[column];
      if (desc) {
        return rowA < rowB ? 1 : -1;
      }
      return rowA > rowB ? 1 : -1;
    });
    tBody();
  };
  tBody();
}
