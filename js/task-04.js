let valueEl = Number(document.querySelector('#value').textContent);
let counterValue = document.querySelector('#value');

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

const incrementValue = () => {
  valueEl += 1;
  //   console.log(valueEl);
  counterValue.innerText = valueEl;
  // console.log("counterValue", counterValue);
};

const decrementValue = () => {
  valueEl -= 1;
  //   console.log(valueEl);
  counterValue.innerText = valueEl;
};

inkrBtn.addEventListener('click', incrementValue);

dekrBtn.addEventListener('click', decrementValue);
