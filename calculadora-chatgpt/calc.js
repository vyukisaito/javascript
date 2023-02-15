const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    let value = buttons[i].innerHTML;
    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      display.value = eval(display.value);
    } else {
      display.value += value;
    }
  });
}
