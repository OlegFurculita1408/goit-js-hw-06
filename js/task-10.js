// Напиши скрипт создания и очистки коллекции элементов.
//  Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.

//  Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const input = document.querySelector('#controls > input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const divColection = document.querySelector('#boxes');
const divColorClass = document.querySelector('.color');

btnCreate.addEventListener('click', createColection);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const markup = `<div class='color'></div>`;

function createColection() {
  const color = getRandomHexColor();
  divColection.insertAdjacentHTML('afterbegin', markup);
  
}
console.log(divColorClass)