const linkEl = document.querySelector('a');

linkEl.addEventListener('click', (e) => {
    e.preventDefault();
    linkEl.textContent = prompt('Введите новое имя ссылки');
})

