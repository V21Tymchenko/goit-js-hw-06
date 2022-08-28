const numberCategories = document.querySelector('#categories');
const countOfChildren = numberCategories.children.length;
console.log('Number of categories:', countOfChildren);

const ulCategoryAndEl = document.querySelectorAll('.item');

ulCategoryAndEl.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log('Elements:', el.lastElementChild.children.length);
});
