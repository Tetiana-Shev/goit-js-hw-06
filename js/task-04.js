const elementBtn = document.querySelector('#counter');
console.log(elementBtn);

const decrementBtn = elementBtn.firstElementChild;
console.log(decrementBtn);

const incrementBtn = elementBtn.lastElementChild;
console.log(incrementBtn);

const counterValue = document.querySelector('#value');
console.log(counterValue);

let counter = 0;
decrementBtn.addEventListener('click', countDecrement);
incrementBtn.addEventListener('click', countIncrement);
function countDecrement() {
  counter -= 1;
  counterValue.textContent = counter;
}
function countIncrement() {
  counter += 1;
  counterValue.textContent = counter;
}
