// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства,
//      а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
const formElements = event.currentTarget.elements;

const mail = formElements.email.value;
const password = formElements.password.value;

    if (mail === '' || password === '') {
        alert('All fields must be filled !');
    }
    else {
        // 1 =====
        // console.log(new Object(`mail: ${mail}, password: ${password}`));

        // 2 =====
        const formData = {
            mail,
            password,
        };
        console.log(formData);

        // 3 =====
        // const formData = new FormData(event.currentTarget);
        // formData.forEach((value, name) => {
        //     const obj = new Object(`${name}: ${value}`);
        //     console.log(obj);
        // });
        
    }
    form.reset();
};

