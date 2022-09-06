let counterValue = document.querySelector('#value');
let valueEl = Number(counterValue.textContent);

const counterContainer = document.querySelector('#counter');
const dekrBtn = counterContainer.firstElementChild;
const inkrBtn = counterContainer.lastElementChild;

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
