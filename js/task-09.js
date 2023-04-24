// Напиши скрипт, который изменяет цвета фона элемента <body>
//  через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const changeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

  changeColor.addEventListener("click", onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  textColor.textContent = color;
  document.body.style.backgroundColor = color;
};
