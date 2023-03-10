const categoriesEl = document.querySelector('#categories');
const itemEl = document.querySelectorAll('.item');

const quantityOfCategories = categories.children.length;

console.log(`Number of Categories: ${quantityOfCategories}`);

itemEl.forEach(el => {
  const textOfTitle = el.firstElementChild.textContent;
  const quantityElemntsOfCategories = el.lastElementChild.children.length;

  console.log(`Category: ${textOfTitle}  Elements: ${quantityElemntsOfCategories}`);
});
