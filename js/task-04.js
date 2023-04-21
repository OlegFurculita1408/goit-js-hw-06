// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const btnDecrement = document.querySelector('[data-action ="decrement"]');
const btnIncrement = document.querySelector('[data-action ="increment"]');
const counterValue = document.querySelector('#value');

counterValue.textContent = 0;

btnDecrement.addEventListener('click', addDecrementNumber);
btnIncrement.addEventListener('click', addIncrementNumber);

function addDecrementNumber() {
    counterValue.textContent -= 1;
};
function addIncrementNumber() {
    ++counterValue.textContent;
};
console.log(counterValue)