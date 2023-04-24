// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputText = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');
const spanTextCurent = spanText.textContent;

inputText.addEventListener('input', addInputValue);

function addInputValue(event) {
    if (inputText.value.trim() === '') {
        spanText.textContent = spanTextCurent;
    } else {
        spanText.textContent = event.currentTarget.value.trim();
    }
};