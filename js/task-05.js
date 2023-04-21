// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputText = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output')

inputText.addEventListener('input', addInputValue);

function addInputValue(event) {
    spanText.textContent = event.currentTarget.value;
};