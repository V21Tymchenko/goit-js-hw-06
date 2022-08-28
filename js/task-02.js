const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ulEl = document.querySelector('#ingredients');

const createElement = ingredients.map(ingredient => {
  const list = document.createElement('li');
  list.classList.add('item');
  list.textContent = ingredient;
  return list;
});

ulEl.append(...createElement);

// const createLi = elements => {
//   return elements.map(element => {
//     const list = document.createElement('li');
//     list.classList.add('item');
//     list.textContent = element;
//     return list;
//   });
// };
// ulEl.append(...createLi);
