// Напиши скрипт, который при потере фокуса на инпуте
// (событие blur), проверяет его содержимое на правильное
// количество введённых символов.
{/* <input
    type="text"
    id="validation-input"
    data-length="6"
    placeholder="Please enter 6 symbols"
/>;   */}
// Сколько символов должно быть в инпуте, указывается в его атрибуте
// data - length.
// Если введено подходящее количество символов, то border инпута
// становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

let inputVal = document.getElementById('validation-input');

let totalLenght = inputVal.getAttribute('data-length');
let intTotallenght = parseInt(totalLenght, 10);

inputVal.oninput = function () {
  if (inputVal.value.length === intTotallenght) {
    inputVal.classList.remove('invalid');
    inputVal.classList.add('valid');
  }
  if (inputVal.value.length === 0) {
    inputVal.classList.remove('valid');
    inputVal.classList.remove('invalid');
  }
  if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
    inputVal.classList.add('invalid');
  }
};