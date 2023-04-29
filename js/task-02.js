// 2 Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const markup = ingredients.map((ing) => {
  const addliIngredient = document.createElement('li');
  addliIngredient.classList.add("item");
  addliIngredient.textContent = ing;
  return addliIngredient;
})
const ul = document.querySelector('ul');
ul.append(...markup);