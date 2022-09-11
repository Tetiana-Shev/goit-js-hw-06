// Напиши скрипт, который реагирует на 
// изменение значения input#font - size - control(событие
// input) и изменяет инлайн - стиль span#text
// обновляя свойство font - size.В результате
// при перетаскивании ползунка будет меняться
// размер текста.

const controlFont = document.getElementById('font-size-control');
console.log(controlFont);

const text = document.getElementById('text');
console.log(text);

controlFont.oninput = function () {
  text.style.fontSize = controlFont.value + 'px';
};