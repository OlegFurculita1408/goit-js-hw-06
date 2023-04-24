//  1.1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const liItemAll = document.querySelectorAll('.item')
console.log(`Number of categories: ${liItemAll.length}`)

//  1.2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
//      элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

liItemAll.forEach(e => {
    console.log(`Category: ${e.firstElementChild.textContent}`)
    console.log(`Elements: ${e.lastElementChild.children.length}`)
});


