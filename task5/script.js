const inputEl = document.querySelector('input');
const dublicateEl = document.querySelector('#duplicateField');

inputEl.addEventListener('keyup', (e) => {
  dublicateEl.textContent = inputEl.value;
})

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(dublicateEl.textContent);
    dublicateEl.textContent = '';
    inputEl.value = '';
})