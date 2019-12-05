/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (name === undefined) {
    return false;
  }
  if (name === null) {
    return false;
  }
  let leng = name.length;
  let inc = name.includes(' ');
  if (leng > 3 && inc != 1) {
    return true;
  }
  else { 
    return false;
  }
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
