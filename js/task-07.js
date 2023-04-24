// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//  и изменяет инлайн-стиль span#text обновляя свойство font-size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

const inputControl = document.querySelector('#font-size-control');
const textValue = document.querySelector('#text');

inputControl.addEventListener('input', fontSizeText);

textValue.style.fontSize = inputControl.value + 'px';

function fontSizeText() {
    textValue.style.fontSize = inputControl.value + 'px';
};