// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//  проверяет его содержимое на правильное количество введённых символов.

const input = document.querySelector('#validation-input');
const dataLength = +input.dataset.length;

input.addEventListener('blur', addClassEvent);

function addClassEvent() {
    if (input.value.length === dataLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
     else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
};